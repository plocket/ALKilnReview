const fs = require('fs');
const session_vars = require( './session_vars' );

const DEBUG_LOG_FILENAME = `debug_log.txt`;
const VERBOSE_LOG_FILENAME = `verbose_log.txt`;

class Log {

  static debug_log_filename = DEBUG_LOG_FILENAME;
  static verbose_log_filename = VERBOSE_LOG_FILENAME;

  constructor( paths ) {
    /** Returns a Log instance that provides different log methods and handles
     *    saving logs to log files.
     *
     * @param {object} paths
     * @param {string} paths.debug_path - alternate path for debug logs
     * @param {string} paths.verbose_path - alternate path for verbose logs
     * */
    console.log( paths );
    paths = paths || {};
    let { debug_path, verbose_path } = paths;
    this.debug_log_path = debug_path || `${ session_vars.get_artifacts_path_name() }/${ DEBUG_LOG_FILENAME }`;
    this.verbose_log_path = verbose_path || `${ session_vars.get_artifacts_path_name() }/${ VERBOSE_LOG_FILENAME }`;
  }

  // set_paths({ debug_path, verbose_path }) {
  //   this.debug_log_path = debug_path;
  //   this.verbose_log_path = verbose_path;
  //   return this;
  // }

  create_msg_start({ types = [], pre = `` }) {
    let start = [`ALKiln`, ...types].join(` `);
    return [ start, pre ].join(`: `);
  }

  log({ types = [], pre = ``, data = ``, post = ``, severity = `log`, debug_log = false }) {
    let start = this.create_msg_start({ types, pre });
    let full = `\n${ start }`;
    if ( data ) { full += `\n${ data }`; }
    if ( post ) { full += `\n${ post }\n`; }
    // This kind of `debug` is about printing to the console
    if ( session_vars.get_debug() ) {
      console[ severity ]( full );
    }
    // This kind of `debug` is about saving in the debug log
    if ( debug_log ) {
      this.add_to_debug_log({ value: full });
    }

    this.add_to_verbose_log({ value: full });

    return this;
  }

  info({ type = ``, pre = ``, data = ``, post = `` }) {
    return this.log({ types: [ type ], pre, data, post, severity: `info`, });
  }

  warn({ type = ``, pre = ``, data = ``, post = `` }) {
    return this.log({ types: [ type, `WARNING` ], pre, data, post, severity: `warn`, });
  }

  error({ type = ``, pre = ``, data = ``, post = `` }) {
    return this.log({ types: [ type, `ERROR` ], pre, data, post, severity: `error`, });
  }

  // Preexisting name that aged poorly. Really means log to the console
  debug({ type = ``, pre = ``, data = ``, post = `` }) {
    return this.log({ types: [ type, `debug console` ], pre, data, post });
  }

  // This kind of `debug` is about saving in the debug log
  debug_log({ type = ``, pre = ``, data = ``, post = `` }) {
    return this.log({ types: [ type, `debug log` ], pre, data, post, debug_log: true });
  }

  add_to_debug_log({ value }) {
    try {
      fs.appendFileSync( this.debug_log_path, value );  // undefined
    } catch ( error ) {
      // TODO: handle different errors differently?
      fs.writeFileSync( this.debug_log_path, value );
    }
    return this;
  }

  add_to_verbose_log({ value }) {
    try {
      fs.appendFileSync( this.verbose_log_path, value );  // undefined
    } catch ( error ) {
      // TODO: handle different errors differently?
      fs.writeFileSync( this.verbose_log_path, value );
    }
    return this;
  }
}

module.exports = Log;



// TODO: Add this functionality back in with further development of the Log class
// // ? 🌈 💡 🔎 🤕 🐞
// 
// let log = {};
// module.exports = log;
// 
// let create_msg_start = function ( types, pre='', code=`? ALK0000` ) {
//   // ? - unknown (fallback)
//   let types_str = types.join(` `);
//   if ( types_str.includes(`plain`) ) {
//     return pre;
//   } else {
//     return `${ code } ${ types_str }: ${ pre }`;
//   }
// };
// 
// // Where is this used?
// log.success = function ({ type='', pre='', data='', post='', code=`ALK0000` }) {
//   /** Log success msg with the given information and strings, prepended with `ALKiln`.
//    *  `type` is often something like 'setup', 'takedown', etc. */
//   // √ - info (fallback)
//   let start = create_msg_start([ type, `SUCCESS` ], pre, `🌈 ${code}` );
//   // Log them each on a separate line
//   console.info( `${ start }` );
//   if ( data ) { console.info( data ); }
//   if ( post ) { console.info( post ); }
// };
// 
// // Where is this used?
// log.info = function ({ type='', pre='', data='', post='', code=`ALK0000` }) {
//   /** Log info msg with the given information and strings, prepended with `ALKiln`.
//    *  `type` is often something like 'setup', 'takedown', etc. */
//   // & - info (fallback)
//   let start = create_msg_start([ type, `INFO` ], pre, `💡 ${code}` );
//   // Log them each on a separate line
//   console.info( `${ start }` );
//   if ( data ) { console.info( data ); }
//   if ( post ) { console.info( post ); }
// };
// 
// // Where is this used?
// log.warn = function ({ type='', pre='', data='', post='', code=`ALK0000` }) {
//   /** Log warning msg with the given information and strings, prepended with `ALKiln`.
//    *  `type` is often something like 'setup', 'takedown', etc. */
//   // ! - warning (fallback)
//   let start = create_msg_start([ type, `WARNING` ], pre, `🔎 ${code}` );
//   // Log them each on a separate line
//   console.warn( `${ start }` );
//   if ( data ) { console.warn( data ); }
//   if ( post ) { console.warn( post ); }
// };
// 
// // Where is this used?
// log.error = function ({ type='', pre='', data='', post='', code=`ALK0000` }) {
//   /** Log error msg with the given information and strings, prepended with `ALKiln`.
//    *  `type` is often something like 'setup', 'takedown', etc. */
//   // X - error (fallback)
//   let start = create_msg_start([ type, `ERROR` ], pre, `🤕 ${code}` );
//   // Log them each on a separate line with extra new lines around the whole thing
//   console.error( `\n${ start }` );
//   if ( data ) { console.error( data ); }
//   if ( post ) { console.error( post, `\n` ); }
// };
// 
// log.debug = function ({ type='', pre='', data='', post='', verbose=false, code=`ALK0000` }) {
//   /** If debugging is turned on, log a message that includes `ALKiln` and `debug` */
//   // @ - debug (fallback)
//   let start = create_msg_start([ type, `DEBUG` ], pre, `🐞 ${ code }` );
//   let full = `\n${ start }`;
//   if ( data ) { full += `\n${ data }`; }
//   if ( post ) { full += `\n${ post }`; }
// 
//   // TODO: Make a verbose log instead of adding to the debug one and always add to it
//   if ( verbose ) {
//     log.add_to_debug_log( full );
//   }
// 
//   if ( session_vars.get_debug() ) {
//     // Log them each on a separate line
//     console.log( `\n${ start }` );
//     console.log( data );
//     console.log( post );
//  }


// =========================
// To archive
// =========================
// let log = {};
// module.exports = log;

// let create_msg_start = function ( types, pre=`` ) {
//   let parts = [ `ALKiln`, ...types ];
//   let start = parts.join(` `);
//   return `${ start }: ${ pre }`;
// };

// log.info = function ({ type=``, pre=``, data=``, post=`` }) {
//   /* Log info msg with the given information and strings, prepended with `ALKiln`.
//   *    `type` is often something like 'setup', 'takedown', etc. */
//   let start = create_msg_start([ type ], pre );
//   // Log them each on a separate line
//   console.info( `${ start }` );
//   if ( data ) { console.info( data ); }
//   if ( post ) { console.info( post ); }
// };

// log.warn = function ({ type=``, pre=``, data=``, post=`` }) {
//   /* Log warning msg with the given information and strings, prepended with `ALKiln`.
//   *    `type` is often something like 'setup', 'takedown', etc. */
//   let start = create_msg_start([ type, `WARNING` ], pre );
//   // Log them each on a separate line
//   console.warn( `${ start }` );
//   if ( data ) { console.warn( data ); }
//   if ( post ) { console.warn( post ); }
// };

// log.error = function ({ type=``, pre=``, data=``, post=`` }) {
//   /* Log error msg with the given information and strings, prepended with `ALKiln`.
//   *    `type` is often something like 'setup', 'takedown', etc. */
//   let start = create_msg_start([ type, `ERROR` ], pre );
//   // Log them each on a separate line with extra new lines around the whole thing
//   console.error( `\n${ start }` );
//   if ( data ) { console.error( data ); }
//   if ( post ) { console.error( post, `\n` ); }
// };

// log.debug = function ({ type=``, pre=``, data=``, post=``, verbose=false }) {
//   /** If debugging is turned on, log a message to the console that includes `ALKiln` and `debug`.
//    *    debug_log.txt is separate. */
//   if ( session_vars.get_debug() || verbose ) {
//     let start = create_msg_start([ type, 'debug' ], pre );
//     let full = `\n${ start }`;
//     // Log them each on a separate line
//     console.log( `\n${ start }` );
//     if ( data ) {
//       full += `\n${ data }`;
//       console.log( data );
//     }
//     if ( post ) {
//       full += `\n${ post }`;
//       console.log( post );
//     }
//     // TODO: Make a verbose log instead of adding to the debug one and always add to it
//     if ( verbose ) {
//       log.add_to_debug_log( full );
//     }
//   }
// };

// // Unused. To properly use this, I think we need to make a class
// // that is given the actual path of the current debug log file.
// log.add_to_debug_log = function(value) {
//   fs.appendFileSync(log.debug_log_path, value);
// };

// log.debug_log_path = `debug_log.txt`;
// log.verbose_log_pathname = `verbose_log.txt`;

// log.verbose = function ({ types=[], pre=``, data=``, post=``, status=`info`, path=`verbose_log.txt` }) {
//   /** Save this text in the verbose log. If debugging is turned on, log a message
//    *    to the console that includes `ALKiln` and `verbose`. */
//   let output = `\n${ create_msg_start( types, pre ) }`
//   if ( data ) { output += `\n${ data }`; }
//   if ( post ) { output += `\n${ post }`; }
//   output += `\n`;
//   console.log( output );

//   fs.appendFileSync();

//   if ( session_vars.get_debug() || verbose ) {

//     let full = `\n${ start }`;
//     // Log them each on a separate line
//     console.log( `\n${ start }` );
//     if ( data ) {
//       full += `\n${ data }`;
//       console.log( data );
//     }
//     if ( post ) {
//       full += `\n${ post }`;
//       console.log( post );
//     }
//     // TODO: Make a verbose log instead of adding to the debug one and always add to it
//     if ( verbose ) {
//       log.add_to_debug_log( full );
//     }
//   }
// };  // Ends log.verbose()

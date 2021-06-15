let tables =  {}

// ============================
// Standard fields - no proxies, no showifs.
// ============================
// TODO: Add more complex fields. E.g `object_checkboxes` and dropdown with `object`.
tables.standard = [
  // continue button comes first to test that it doesn't get activated till after all other
  // variables have been set.
  { "var": "direct_standard_fields", "value": "True", "checked": false },  // May want to change `checked`
  { "var": "checkboxes_yesno", "value": "True", "checked": true },
  { "var": "checkboxes_other_1", "value": "checkbox_other_1_opt_1", "checked": false },
  { "var": "checkboxes_other_1", "value": "checkbox_other_1_opt_2", "checked": true },
  { "var": "checkboxes_other_1", "value": "checkbox_other_1_opt_3", "checked": false },
  { "var": "checkboxes_other_1", "value": "None", "checked": false },
  { "var": "checkboxes_other_2", "value": "checkbox_other_2_opt_1", "checked": false },
  { "var": "checkboxes_other_2", "value": "checkbox_other_2_opt_2", "checked": false },
  { "var": "checkboxes_other_2", "value": "checkbox_other_2_opt_3", "checked": false },
  { "var": "checkboxes_other_2", "value": "None", "checked": true },
  { "var": "radio_yesno", "value": "False", "checked": true },
  { "var": "radio_other", "value": "radio_other_opt_2", "checked": true },
  { "var": "text_input", "value": "Some one-line text", "checked": "" },
  {"var":"text_input","value":"Some conflicting text", "checked": "" },
  { "var": "textarea", "value": "Some\nmulti-line\ntext", "checked": "" },
  { "var": "dropdown_test", "value": "dropdown_opt_2", "checked": true },  // May want to change `checked`
];


// ============================
// Simple show if fields - no proxies
// ============================
tables.show_if = [
  // continue button comes first to test that it doesn't get activated till after all other
  // variables have been set.
  { "var": "direct_showifs", "value": "True", "checked": true, },  // May want to change `checked`
  { "var": "show_2", "value": "True", "checked": true, },
  { "var": "show_3", "value": "True", "checked": false, },
  { "var": "showif_checkbox_yesno", "value": "True", "checked": true, },
  { "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_1", "checked": false, },
  { "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_2", "checked": true, },
  { "var": "showif_checkboxes_other", "value": "None", "checked": false, },
  { "var": "showif_yesnoradio", "value": "False", "checked": true, },
  { "var": "showif_radio_other", "value": "showif_radio_multi_2", "checked": true, },
  { "var": "showif_text_input", "value": "Some one-line text in show if input", "checked": "", },
  { "var": "showif_textarea", "value": "Some\nmulti-line\ntext in show if textarea", "checked": "", },
  { "var": "showif_dropdown", "value": "showif_dropdown_2", "checked": true, },  // May want to change `checked`
];


// ============================
// Buttons
// ============================
// `continue button field:`
tables.button_continue = [
  { "var": "button_continue", "value": "True", "checked": true, },  // May want to change `checked`
];

// `yesnomaybe:`
tables.buttons_yesnomaybe_yes = [
  { "var": "buttons_yesnomaybe", "value": "True", "checked": true, },  // May want to change `checked`
];
tables.buttons_yesnomaybe_no = [
  { "var": "buttons_yesnomaybe", "value": "False", "checked": true, },  // May want to change `checked`
];
tables.buttons_yesnomaybe_none = [
  { "var": "buttons_yesnomaybe", "value": "None", "checked": true, },  // May want to change `checked`
];

// `field:` and `buttons:`
tables.buttons_other_1 = [
  { "var": "buttons_other", "value": "button_1", "checked": true, },  // May want to change `checked`
];
tables.buttons_other_2 = [
  { "var": "buttons_other", "value": "button_2", "checked": true, },  // May want to change `checked`
];
tables.buttons_other_3 = [
  { "var": "buttons_other", "value": "button_3", "checked": true, },  // May want to change `checked`
];

// `field:` and `action buttons:`
tables.buttons_event_action = [
  { "var": "end", "value": "", "checked": "", },  // May want to change `checked`
];


// =================
// Converting from old table to new table
// =================
tables.original_formatting = [
  { "var": "direct_showifs", "choice": "True", "value": "true" },
  { "var": "button_continue", "choice": "True", "value": "true" },
  { "var": "buttons_other", "choice": "", "value": "button_2" },
  { "var": "buttons_yesnomaybe", "choice": "True", "value": "true" },
  { "var": "checkboxes_other", "choice": "checkbox_other_opt_1", "value": "true" },
  { "var": "checkboxes_other", "choice": "checkbox_other_opt_2", "value": "true" },
  { "var": "checkboxes_other", "choice": "checkbox_other_opt_3", "value": "false" },
  { "var": "checkboxes_yesno", "choice": "True", "value": "true" },
  { "var": "direct_standard_fields", "choice": "True", "value": "true" },
  { "var": "dropdown_test", "choice": "", "value": "dropdown_opt_2" },
  { "var": "radio_other", "choice": "", "value": "radio_other_opt_3" },
  { "var": "radio_yesno", "choice": "False", "value": "false" },
  { "var": "screen_features", "choice": "True", "value": "true" },
  { "var": "showif_checkbox_yesno", "choice": "False", "value": "false" },
  { "var": "showif_checkboxes_other", "choice": "showif_checkboxes_nota_1", "value": "false" },
  { "var": "showif_checkboxes_other", "choice": "showif_checkboxes_nota_2", "value": "true" },
  { "var": "showif_dropdown", "choice": "", "value": "showif_dropdown_1" },
  { "var": "showif_radio_other", "choice": "", "value": "showif_radio_multi_2" },
  { "var": "showif_text_input", "choice": "", "value": "Show if text input value" },
  { "var": "showif_textarea", "choice": "", "value": "Show if\nmultiline text\narea value" },
  { "var": "showif_yesnoradio", "choice": "True", "value": "true" },
  { "var": "text_input", "choice": "", "value": "Regular text input field value" },
  { "var": "textarea", "choice": "", "value": "Multiline text\narea value" },
  { "var": "show_3", "choice": "True", "value": "true" },
  { "var": "show_2", "choice": "True", "value": "true" },
];

/* Notes about conversion
* - value: row.choice || row.value,
*   Looking at the old tables, what we consider to be `value` now is most often
*   `choice`. Whenever og `value` is the right value for current `value`, og
*   `choice` is blank, so this logic is correct.
* - checked: row.checked vs. row.value,
*   The original `value` might be 'Some input text' or 'true'/'false'
*   If an original format table has a non-true/false value, that will stick
*   around, but it won't hurt our current code's functionality
*   We do want to give preference to `.checked` from new tables.
*/
tables.old_to_current_formatting = [
  {
    "original": { "var": "direct_showifs", "choice": "True", "value": "true" },
    "var": "direct_showifs", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "button_continue", "choice": "True", "value": "true" },
    "var": "button_continue", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "buttons_other", "choice": "", "value": "button_2" },
    "var": "buttons_other", "value": "button_2", "checked": "button_2", "sought": "",
  },
  {
    "original": { "var": "buttons_yesnomaybe", "choice": "True", "value": "true" },
    "var": "buttons_yesnomaybe", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "checkboxes_other", "choice": "checkbox_other_opt_1", "value": "true" },
    "var": "checkboxes_other", "value": "checkbox_other_opt_1", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "checkboxes_other", "choice": "checkbox_other_opt_2", "value": "true" },
    "var": "checkboxes_other", "value": "checkbox_other_opt_2", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "checkboxes_other", "choice": "checkbox_other_opt_3", "value": "false" },
    "var": "checkboxes_other", "value": "checkbox_other_opt_3", "checked": "false", "sought": "",
  },
  {
    "original": { "var": "checkboxes_yesno", "choice": "True", "value": "true" },
    "var": "checkboxes_yesno", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "direct_standard_fields", "choice": "True", "value": "true" },
    "var": "direct_standard_fields", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "dropdown_test", "choice": "", "value": "dropdown_opt_2" },
    "var": "dropdown_test", "value": "dropdown_opt_2", "checked": "dropdown_opt_2", "sought": "",
  },
  {
    "original": { "var": "radio_other", "choice": "", "value": "radio_other_opt_3" },
    "var": "radio_other", "value": "radio_other_opt_3", "checked": "radio_other_opt_3", "sought": "",
  },
  {
    "original": { "var": "radio_yesno", "choice": "False", "value": "false" },
    "var": "radio_yesno", "value": "False", "checked": "false", "sought": "",
  },
  {
    "original": { "var": "screen_features", "choice": "True", "value": "true" },
    "var": "screen_features", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "showif_checkbox_yesno", "choice": "False", "value": "false" },
    "var": "showif_checkbox_yesno", "value": "False", "checked": "false", "sought": "",
  },
  {
    "original": { "var": "showif_checkboxes_other", "choice": "showif_checkboxes_nota_1", "value": "false" },
    "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_1", "checked": "false", "sought": "",
  },
  {
    "original": { "var": "showif_checkboxes_other", "choice": "showif_checkboxes_nota_2", "value": "true" },
    "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_2", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "showif_dropdown", "choice": "", "value": "showif_dropdown_1" },
    "var": "showif_dropdown", "value": "showif_dropdown_1", "checked": "showif_dropdown_1", "sought": "",
  },
  {
    "original": { "var": "showif_radio_other", "choice": "", "value": "showif_radio_multi_2" },
    "var": "showif_radio_other", "value": "showif_radio_multi_2", "checked": "showif_radio_multi_2", "sought": "",
  },
  {
    "original": { "var": "showif_text_input", "choice": "", "value": "Show if text input value" },
    "var": "showif_text_input", "value": "Show if text input value", "checked": "Show if text input value", "sought": "",
  },
  {
    "original": { "var": "showif_textarea", "choice": "", "value": "Show if\nmultiline text\narea value" },
    "var": "showif_textarea", "value": "Show if\nmultiline text\narea value", "checked": "Show if\nmultiline text\narea value", "sought": "",
  },
  {
    "original": { "var": "showif_yesnoradio", "choice": "True", "value": "true" },
    "var": "showif_yesnoradio", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "text_input", "choice": "", "value": "Regular text input field value" },
    "var": "text_input", "value": "Regular text input field value", "checked": "Regular text input field value", "sought": "",
  },
  {
    "original": { "var": "textarea", "choice": "", "value": "Multiline text\narea value" },
    "var": "textarea", "value": "Multiline text\narea value", "checked": "Multiline text\narea value", "sought": "",
  },
  {
    "original": { "var": "show_3", "choice": "True", "value": "true" },
    "var": "show_3", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "show_2", "choice": "True", "value": "true" },
    "var": "show_2", "value": "True", "checked": "true", "sought": "",
  },
];


tables.current_formatting = [
  { "var": "direct_showifs", "value": "True", "checked": "true", "sought": "" },
  { "var": "button_continue", "value": "True", "checked": "true", "sought": "" },
  { "var": "buttons_other", "value": "button_2", "checked": "", "sought": "" },
  { "var": "buttons_yesnomaybe", "value": "True", "checked": "true", "sought": "" },
  { "var": "checkboxes_other", "value": "checkbox_other_opt_1", "checked": "true", "sought": "" },
  { "var": "checkboxes_other", "value": "checkbox_other_opt_2", "checked": "true", "sought": "" },
  { "var": "checkboxes_other", "value": "checkbox_other_opt_3", "checked": "false", "sought": "" },
  { "var": "checkboxes_yesno", "value": "True", "checked": "true", "sought": "" },
  { "var": "direct_standard_fields", "value": "True", "checked": "true", "sought": "" },
  { "var": "dropdown_test", "value": "dropdown_opt_2", "checked": "", "sought": "" },
  { "var": "radio_other", "value": "radio_other_opt_3", "checked": "", "sought": "" },
  { "var": "radio_yesno", "value": "False", "checked": "false", "sought": "" },
  { "var": "screen_features", "value": "True", "checked": "true", "sought": "" },
  { "var": "showif_checkbox_yesno", "value": "False", "checked": "false", "sought": "" },
  { "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_1", "checked": "false", "sought": "" },
  { "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_2", "checked": "true", "sought": "" },
  { "var": "showif_dropdown", "value": "showif_dropdown_1", "checked": "", "sought": "" },
  { "var": "showif_radio_other", "value": "showif_radio_multi_2", "checked": "", "sought": "" },
  { "var": "showif_text_input", "value": "Show if text input value", "checked": "", "sought": "" },
  { "var": "showif_textarea", "value": "Show if\nmultiline text\narea value", "checked": "", "sought": "" },
  { "var": "showif_yesnoradio", "value": "True", "checked": "true", "sought": "" },
  { "var": "text_input", "value": "Regular text input field value", "checked": "", "sought": "" },
  { "var": "textarea", "value": "Multiline text\narea value", "checked": "", "sought": "" },
  { "var": "show_3", "value": "True", "checked": "true", "sought": "" },
  { "var": "show_2", "value": "True", "checked": "true", "sought": "" },
];

// Should not be changed at all
tables.current_to_current_formatting = [
  {
    "original": { "var": "direct_showifs", "value": "True", "checked": "true", "sought": "" },
    "var": "direct_showifs", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "button_continue", "value": "True", "checked": "true", "sought": "" },
    "var": "button_continue", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "buttons_other", "value": "button_2", "checked": "", "sought": "" },
    "var": "buttons_other", "value": "button_2", "checked": "", "sought": "",
  },
  {
    "original": { "var": "buttons_yesnomaybe", "value": "True", "checked": "true", "sought": "" },
    "var": "buttons_yesnomaybe", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "checkboxes_other", "value": "checkbox_other_opt_1", "checked": "true", "sought": "" },
    "var": "checkboxes_other", "value": "checkbox_other_opt_1", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "checkboxes_other", "value": "checkbox_other_opt_2", "checked": "true", "sought": "" },
    "var": "checkboxes_other", "value": "checkbox_other_opt_2", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "checkboxes_other", "value": "checkbox_other_opt_3", "checked": "false", "sought": "" },
    "var": "checkboxes_other", "value": "checkbox_other_opt_3", "checked": "false", "sought": "",
  },
  {
    "original": { "var": "checkboxes_yesno", "value": "True", "checked": "true", "sought": "" },
    "var": "checkboxes_yesno", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "direct_standard_fields", "value": "True", "checked": "true", "sought": "" },
    "var": "direct_standard_fields", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "dropdown_test", "value": "dropdown_opt_2", "checked": "", "sought": "" },
    "var": "dropdown_test", "value": "dropdown_opt_2", "checked": "", "sought": "",
  },
  {
    "original": { "var": "radio_other", "value": "radio_other_opt_3", "checked": "", "sought": "" },
    "var": "radio_other", "value": "radio_other_opt_3", "checked": "", "sought": "",
  },
  {
    "original": { "var": "radio_yesno", "value": "False", "checked": "false", "sought": "" },
    "var": "radio_yesno", "value": "False", "checked": "false", "sought": "",
  },
  {
    "original": { "var": "screen_features", "value": "True", "checked": "true", "sought": "" },
    "var": "screen_features", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "showif_checkbox_yesno", "value": "False", "checked": "false", "sought": "" },
    "var": "showif_checkbox_yesno", "value": "False", "checked": "false", "sought": "",
  },
  {
    "original": { "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_1", "checked": "false", "sought": "" },
    "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_1", "checked": "false", "sought": "",
  },
  {
    "original": { "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_2", "checked": "true", "sought": "" },
    "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_2", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "showif_dropdown", "value": "showif_dropdown_1", "checked": "", "sought": "" },
    "var": "showif_dropdown", "value": "showif_dropdown_1", "checked": "", "sought": "",
  },
  {
    "original": { "var": "showif_radio_other", "value": "showif_radio_multi_2", "checked": "", "sought": "" },
    "var": "showif_radio_other", "value": "showif_radio_multi_2", "checked": "", "sought": "",
  },
  {
    "original": { "var": "showif_text_input", "value": "Show if text input value", "checked": "", "sought": "" },
    "var": "showif_text_input", "value": "Show if text input value", "checked": "", "sought": "",
  },
  {
    "original": { "var": "showif_textarea", "value": "Show if\nmultiline text\narea value", "checked": "", "sought": "" },
    "var": "showif_textarea", "value": "Show if\nmultiline text\narea value", "checked": "", "sought": "",
  },
  {
    "original": { "var": "showif_yesnoradio", "value": "True", "checked": "true", "sought": "" },
    "var": "showif_yesnoradio", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "text_input", "value": "Regular text input field value", "checked": "", "sought": "" },
    "var": "text_input", "value": "Regular text input field value", "checked": "", "sought": "",
  },
  {
    "original": { "var": "textarea", "value": "Multiline text\narea value", "checked": "", "sought": "" },
    "var": "textarea", "value": "Multiline text\narea value", "checked": "", "sought": "",
  },
  {
    "original": { "var": "show_3", "value": "True", "checked": "true", "sought": "" },
    "var": "show_3", "value": "True", "checked": "true", "sought": "",
  },
  {
    "original": { "var": "show_2", "value": "True", "checked": "true", "sought": "" },
    "var": "show_2", "value": "True", "checked": "true", "sought": "",
  },
];


// ============================
// Proxy vars (x, i, j, ...)
// ============================
// x[i].name.first
tables.proxies_xi = [
  { "sought": "a_list[0].name.first", "var": "x[i].name.first", "value": "Firstname", "checked": "", },
];

// Multiple proxies by the same name are on the list (because of a loop)
// x[i].name.first
tables.proxies_multi = [
  { "sought": "a_list[0].name.first", "var": "x[i].name.first", "value": "Firstname", "checked": "", },
  { "sought": "a_list[1].name.first", "var": "x[i].name.first", "value": "Firstname", "checked": "", },
  { "sought": "a_list[2].name.first", "var": "x[i].name.first", "value": "Firstname", "checked": "", },
];

// your_past_benefits[i].still_receiving
// your_past_benefits['State Veterans Benefits'].still_receiving
// Non-match comes after a match
tables.proxies_non_match = [
  { "sought": "your_past_benefits['State Veterans Benefits'].still_receiving", "var": "your_past_benefits[i].start_date", "value": "01/01/2001", "checked": "", },
  { "sought": "your_past_benefits['State Veterans Benefits'].still_receiving", "var": "your_past_benefits[i].still_receiving", "value": "True", "checked": "true", },
  { "sought": "your_past_benefits['State Veterans Benefits'].still_receiving", "var": "your_past_benefits[i].end_date", "value": "02/02/2002", "checked": "", },
];


// ============================
// Signature
// ============================
// Also tests that multiple signature rows only match their var
tables.signature = [
  { "sought": "signature_2", "var": "signature_2", "value": "/sign", "checked": "", },
  { "sought": "signature_1", "var": "signature_1", "value": "/sign", "checked": "", },
];


// ============================
// `choices:`
// ============================
// `field:` and `choices:`
tables.choices = [
  { "var": "cs_arrears_mc", "value": "No", "checked": "true", },
];


// ============================
// dropdowns created with objects
// ============================
// ```
// - Something: some_var
//   datatype: object
//   object labeler: |
//     lambda y: y.short_label()```
//   choices: some_obj
// ```
tables.object_dropdown = [
  { "var": "trial_court", "value": "all_courts[0]", "checked": "true", },
];



module.exports = tables;


<?php
/**
 * Gutenberg block skeleton for a Comparison Table.
 * Register server block and enqueue script.
 * Note: expand this into a full block with edit/save JS.
 */
function reallywp_register_compare_block(){
  // register block type and enqueue JS - placeholder
  register_block_type(__DIR__ . '/build/compare-block');
}
add_action('init','reallywp_register_compare_block');
?>

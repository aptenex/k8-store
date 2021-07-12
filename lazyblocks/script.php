<?php

$file = $args[0];

// make sure it works
json_decode(file_get_contents($file), true, 512, JSON_THROW_ON_ERROR);

echo "running lazyblocks delete + import \n";
$_POST[ 'lzb_tools_import_nonce' ] = wp_create_nonce('lzb-tools-import-nonce');
$_FILES['lzb_tools_import_json'] = [
    'size' => strlen(file_get_contents($file)),
    'error' => false,
    'name' => 'data.json',
    'tmp_name' => $file,
];

$tools = new LazyBlocks_Tools();
$tools->import_json();
echo "import complete\n";

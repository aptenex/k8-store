<?php

if (!isset($args)) {
    $args = [];
}

if (count($args) < 1) {
    die('Please provide your eval command');
}

$evalCommand = $args[0];

echo "running ${evalCommand} \n";

switch ($evalCommand) {

    case 'lazyblocks-import':

        $name = 'lazyblocks-data.json';
        $file = __DIR__ . '/' . $name;

        echo "\nverifying\n";

        // make sure it works
        json_decode(file_get_contents($file), true, 512, JSON_THROW_ON_ERROR);

        echo "running lazyblocks delete + import \n";
        $_POST['lzb_tools_import_nonce'] = wp_create_nonce('lzb-tools-import-nonce');
        $_FILES['lzb_tools_import_json'] = [
            'size'     => strlen(file_get_contents($file)),
            'error'    => false,
            'name'     => $name,
            'tmp_name' => $file,
        ];

        $tools = new \LazyBlocks_Tools();
        $tools->import_json();
        echo "import complete\n";

        break;

    case 'acf-field-group-sync':
        $_GET['acfsync'] = [];

        include_once( ACF_PATH . 'includes/acf-utility-functions.php');
        acf_include('includes/admin/admin-field-groups.php');

        $tools = new \ACF_Admin_Field_Groups();

        $tools->setup_sync();

        print_r($tools->sync);

        $tools->check_sync();

        echo "sync complete\n";

        break;

}


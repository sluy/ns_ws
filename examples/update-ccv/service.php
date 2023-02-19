<?php
//If function does not exists, we include it from gateways.
if (function_exists('WS\emit')) {
    $wsPath = dirname(dirname(dirname(__FILE__))) . '/gateways/php/lib.php';
    require_once($wsPath);
}
//Call update ccv.
WS\emit('update-ccv');

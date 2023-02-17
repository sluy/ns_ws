<?php
//Define global websocket URL.
if(!defined ('WEBSOCKET_SERVICE_URL')) {
    define('WEBSOCKET_SERVICE_URL', 'http://neo.fo:8080');
}
//Define global websocket secret (used to avoid unauthorized emits.)
if (!defined('WEBSOCKET_SERVICE_SECRET')) {
    define('WEBSOCKET_SERVICE_SECRET', 'kphjsucr2ve2fzgo3631l1a2lxmz0a7k');
}
/**
 * Emit a socket action.
 * @return bool
 */
function emitWS ($action) {
    try {
        $path = WEBSOCKET_SERVICE_URL . '/' . $action . '?secret=' . WEBSOCKET_SERVICE_SECRET;
        $plain = file_get_contents($path);
        if (is_string($plain)) {
            $res = json_decode($plain, true);
            if (is_array($res) && isset($res['status']) && $res['status'] === true) {
                return true;
            }
        }
    } catch (\Throwable $th) {
        //throw $th;
    }
    return false;
}
//Call update ccv.
emitWS('update-ccv');
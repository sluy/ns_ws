<?php
namespace WS;
/**
 * Simple config class to load service .env file.
 */
class Cfg
{
    public static $vars = null;

    public static function get($key, $defaultValue = '') {
        if (is_numeric($key)) {
            $key = strval($key);
        }
        if (is_string($key)) {
            $key = strtoupper(trim($key));
            try {
                self::load();
                if (array_key_exists($key, self::$vars) && self::$vars[$key] !== null && self::$vars[$key] !== '') {
                    return self::$vars[$key];
                }
            } catch (\Throwable $th) {
                //throw $th;
            }
        }
        return $defaultValue;
    }

    public static function load($force = false) :void
    {
        if (is_array(self::$vars) && $force !== true) {
            return;
        }
        $path = dirname(dirname(dirname(__FILE__))) . '/.env';

        if (!file_exists($path) || !is_readable($path)) {
            throw new \RuntimeException(sprintf('%s file is not readable', $path));
        }
        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

        self::$vars = [];
        foreach ($lines as $line) {
            if (strpos(trim($line), '#') === 0) {
                continue;
            }
            list($name, $value) = explode('=', $line, 2);
            $name = trim($name);
            $value = trim($value);
            if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
                self::$vars[$name] = $value;
            }
        }
    }
}

/**
 * Emit a socket action in service.
 * @param string $action Action name.
 * @param array $params Another params to provide.
 * @return bool
 */
function emit ($action, $params = []) {
    $url = Cfg::get('url');
    $port = Cfg::get('port');
    $auth = Cfg::get('auth_key');
    if (!is_array($params)) {
        $params = [];
    }
    $params['secret'] = $auth;
    try {
        $path = $url . ':' . $port . '/' . $action . '?' . http_build_query($params);
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

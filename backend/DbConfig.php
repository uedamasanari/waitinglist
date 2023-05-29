<?php
class DbConfig {
  private $db;

  public function __construct() {
    $host = 'mysql214.phy.lolipop.lan'; // データベースホスト名またはIPアドレス
    $dbname = 'LAA1417823-waitinglist'; // データベース名
    $username = 'LAA1417823'; // ユーザ名
    $password = 'b7hyUPertGvBAMc'; // パスワード

    try {
      $this->db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    } catch(PDOException $e) {
      echo 'Connection failed: ' . $e->getMessage();
    }
  }

  public function getDb() {
    return $this->db;
  }
}
?>
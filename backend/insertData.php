<?php
    require_once 'DbConfig.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    class InsertData {
    
        private $db;
      
        public function __construct() {
          $config = new DbConfig();
          $this->db = $config->getDb();
        }
      
        public function insertIntoWaiting($mail, $text) {
          try {
            $sql = "SELECT * FROM waiting WHERE waiting_mail = :mail";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':mail', $mail);
            $stmt->execute();
            
            if ($stmt->rowCount() > 0) {
                $response = array("maintext" => "すでに登録されています。", "subtext" => "サービス開始までお待ちください！" ,  "status" => "success");
                echo json_encode($response);
            } else {
              $sql = "INSERT INTO waiting (waiting_mail, waiting_text) VALUES (:mail, :text)";
              $stmt = $this->db->prepare($sql);
      
              $stmt->bindParam(':mail', $mail);
              $stmt->bindParam(':text', $text);
      
              $stmt->execute();
              $response = array("maintext" => "登録しました！" , "subtext" => "サービス開始までお待ちください！" ,  "status" => "success");
              echo json_encode($response);
            }
          } catch(PDOException $e) {
            $response = array("maintext" => "システムエラーが起きました。", "subtext" => "お手数ですがお問い合わせまでお願いします。" , "status" => "error");
            echo json_encode($response);
          }
        }
      }
      
      // Assuming you're receiving JSON format
      $inputJSON = file_get_contents('php://input');
      $input = json_decode($inputJSON, TRUE); //convert JSON into array
      
      $waiting_mail = $input['waiting_mail'];
      $waiting_text = $input['waiting_text'];
      
      $dataInsert = new InsertData();
      $dataInsert->insertIntoWaiting($waiting_mail, $waiting_text);
      

?>

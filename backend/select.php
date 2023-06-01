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
      
        public function selectInfo() {
          try {
            $sql = "SELECT * FROM Info";
            $stmt = $this->db->prepare($sql);
            $stmt->execute();
            
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            if(count($result) > 0) {
                foreach($result as $row){
                    $response = array(
                        "info_id" => $row["info_id"],
                        "info_twitter" => $row["info_twitter"],
                        "info_like" => $row["info_like"],
                        "info_retweet" => $row["info_retweet"]
                    );

                    $sql = "SELECT COUNT(*) as count FROM waiting";
                    $stmt = $this->db->prepare($sql);
                    $stmt->execute();

                    $countResult = $stmt->fetch(PDO::FETCH_ASSOC);
                    if($countResult){
                        $response["info_sum"] = $countResult["count"];
                    }

                    echo json_encode($response);
                }
            } else {
                $response = array("message" => "No data found.");
                echo json_encode($response);
            }
            
          } catch(PDOException $e) {
            $response = array("maintext" => "システムエラーが起きました。", "subtext" => "お手数ですがお問い合わせまでお願いします。" , "status" => "error");
            echo json_encode($response);
          }
        }
      }
      
      $dataInsert = new InsertData();
      $dataInsert->selectInfo();
?>

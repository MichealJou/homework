<?php
/**
 * Created by PhpStorm.
 * User: zhouping
 * Date: 16/1/30
 * Time: 下午11:38
 */
namespace Admin\Controller;
use Think\Controller;

abstract  class  CommonController extends Controller{

   public function _initialize(){

      if(!$_SESSION['isLogin']){
         $this->redirect('Login/login');

      }
   }

}

?>
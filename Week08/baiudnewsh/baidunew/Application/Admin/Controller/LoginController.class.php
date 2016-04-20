<?php
/**
 * Created by PhpStorm.
 * User: zhouping
 * Date: 16/1/31
 * Time: 下午11:00
 */

namespace Admin\Controller;
use Think\Controller;

class LoginController extends Controller
{



    public function index(){
        $this->isLogin();
        $this->display('login');
    }

    /**
     * 校验用户的密码和账号姓名是正确
     */
   public function checkLogin(){
       $this->isLogin();
       //获取用户名
       $username = $_POST['email'];
       //获取密码
       $password = md5($_POST['password']);
       $admin =  D('admin');
       $condition['email'] = $username;
       $condition['password'] = $password;
       $result= $admin->where($condition)->select();
       if($result) {
           $_SESSION['isLogin'] = true;
           $_SESSION['userinfo'] = $result[0];
           $this->success('登录成功', U('admin/index/index'),5);
       }else{
           $this->error('登录失败',U('admin/login/index'),5);
       }

   }

    /**
     * 检查用户是否登录
     */
  public function isLogin(){

      if($_SESSION['isLogin']){
          $this->redirect('index/index');
      }
  }

    /**
     * 退出登录
     */
   public function logout(){
      $_SESSION['isLogin'] = false;
       $this->redirect('login');
  }
}
?>
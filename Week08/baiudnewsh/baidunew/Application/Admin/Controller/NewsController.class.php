<?php
/**
 * Created by PhpStorm.
 * User: zhouping
 * Date: 16/2/18
 * Time: 上午8:10
 */
namespace Admin\Controller;
use Think\Controller;
use Think\Model;

class NewsController extends CommonController{

    /**
     * 首次加载
     */
    public function index(){
        $category = M('Category');
        $dataCategory = $category->select();
        $this->assign('categoryList',$dataCategory);
        $this->display('news:category_list');

    }


    /**
     * 创建分类
     */
    public function addCategory(){
      $cateName = $_POST['cateName'];
      $sort = $_POST['sort'];
      $data['cate_name'] =$cateName;
      $data['sort'] = $sort;
      $data['create_time'] = time();
      $Category = M('Category');
      $Category ->create($data);
      $return = $Category->add();
      if($return){
          $dataReturn['success']='1';
      }else{
          $dataReturn['success']='0';
      }
      $this->ajaxReturn($dataReturn,'JSON');
    }

    /**
     * 删除
     */
    public function deleteCategory(){
       $category = M('Category');
       $dataC =$category->delete($_GET['id']);
       $this->redirect('News:index');
    }

    public function newsList(){
       $categoryInfo =  M('CategoryInfo');
       $category = M('Category');
       $dataCategory = $category->select();
       $dataCateInfo =  $categoryInfo->alias('a')
           ->join('t_category d on d.id=cate_id','left')
           ->field('a.* ,d.id as id1 ,d.cate_name as cate_name')
           ->select();
       $this->assign('categoryInfoList',$dataCateInfo);
       $this->assign('categoryList',$dataCategory);
       $this->display('news_category_list');
    }


    /*
     * 新增
     */
    public function  addCategoryInfo(){
        $title = $_POST['title'];
        $cateId = $_POST['cateId'];
        $imgUrl = $_POST['imgUrl'];
        $content = $_POST['content'];
        $data['title'] =$title;
        $data['cate_id'] = $cateId;
        $data['img_url'] = $imgUrl;
        $data['content'] = $content;
        $data['create_time'] = time();
        $CategoryInfo = M('CategoryInfo');
        $CategoryInfo ->create($data);
        $return = $CategoryInfo->add();
        if($return){
            $dataReturn['success']='1';
        }else{
            $dataReturn['success']='0';
        }
        $this->ajaxReturn($dataReturn,'JSON');
    }

    /***
     * 删除
     */
    public function deleteCategoryInfo(){
        $category = M('CategoryInfo');
        $dataC =$category->delete($_GET['id']);
        $this->redirect('News:newsList');
    }

    public function upload(){
        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize   =     3145728 ;// 设置附件上传大小
        $upload->exts      =     array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
        $upload->rootPath  =      './Uploads/'; // 设置附件上传根目录
        // 上传单个文件
        $info   =   $upload->upload();

        $dataReturn = array();
        $dataReturn['imgurl']='/Uploads/'.$info['Filedata']['savepath'].$info['Filedata']['savename'];
        if(!$info) {// 上传错误提示错误信息
            $dataReturn['success'] = '1';
        }else{// 上传成功 获取上传文件信息

            $dataReturn['success'] = '0';
        }
        $this->ajaxReturn($dataReturn,'JSON');
    }

}

?>
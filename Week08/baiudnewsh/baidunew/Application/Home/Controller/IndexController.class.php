<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index()
    {
        $category = M('Category');
        $categoryInfo =  M('CategoryInfo');
        $dataCategory = $category->limit('0,6')->select();
        $dataCategory1 =  $category->limit('6,10')->select();
        $categoryInfoList = $categoryInfo ->select();
        $this->assign('categoryList',$dataCategory);
        $this->assign('categoryList1',$dataCategory1);
        $this->assign('categoryInfoList',$categoryInfoList);
        $this->display();
    }
}
?>
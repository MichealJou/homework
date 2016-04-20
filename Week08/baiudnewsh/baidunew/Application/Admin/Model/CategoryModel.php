<?php
/**
 * Created by PhpStorm.
 * User: zhouping
 * Date: 16/2/21
 * Time: 上午11:37
 */
namespace Admin\Model;
use Think\Model;
class CategoryModel extends Model{
    protected $tablePrefix = 'n_';//表名的前缀
    protected $tableName = "category";//表
    protected $fields = array('id','cateName','cateTime','sort');
    protected $pk = 'id';//主键
}


?>
<?php
/*
    File: Lab8_hpache22.php
    Name: Henry Pacheco Cachon
    Class: CS325, January 2022
    Lab: 07
    Due: 19 January 2022
*/
$dir1 = getcwd();
$dir = $dir1 . "/img/";
$files_array = array();

// Open a directory, and read its contents
if (is_dir($dir)){
    if ($dh = opendir($dir)){
      while (($file = readdir($dh)) !== false){
        if ($file == "." || $file == ".."){
            continue;
        }
        else{
            array_push($files_array, $file);
        }
        
      }
      closedir($dh);
    }
}

echo $files_array[array_rand($files_array)];

?>
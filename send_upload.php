<?php
	// check file is upload


    print_r($_FILES['file']);

    // if(!empty($_FILES['file'])){
    //     $get_files = pathinfo($_FILES['file']['name'],PATHINFO_EXTENSION);
    //             $image_data = time().'.'.$get_files;
    //             move_uploaded_file($_FILES["file"]["tmp_name"], 'images/'.$image_data);
    //     echo $image_data." successfully uploaded";
    // }else{
    //     echo "Invalid or Empty File/Format";
    // }
?>
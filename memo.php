<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memorandum - SDCR</title>
</head>
<body>
    <div class="wrapper">
    <form name="" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" >
    <label for="text">ITR for 2020-21</label>
    <button type="submit">View</button>
</form>
        <?php
            if($_SERVER['REQUEST_METHOD']=='POST'){
                echo `<h1>ITR for 2020-21</h1>
                <iframe src="/uploads/itr.pdf" width="100%" height="500px">
                </iframe>`;
            }
        ?>
    </div>
    <!DOCTYPE html>

    
  
    
</body>
</html>
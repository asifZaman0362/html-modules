var files = <?php $out = array();
$i = 0;
foreach (glob('../res/slides/*.jpg') as $filename) {
    if ($i >= 8) {
        # We don't want a bazillion images in our slideshow.
        break;
        #Or do we?
    }
    $p = pathinfo($filename);
    $out[] = $p['filename'];
    $i++;
}
echo json_encode($out); ?>;
export default async  function disablePreview(req,res){
    res.clearPreviewData();
    res.end("preview mode disabled")
}
document.getElementById('download-btn').addEventListener('click', function() {
    const link = document.createElement('a');
    
    link.href = 'metzger-studio/manifest.pdf';  
    
    link.download = 'manifest.pdf';
    
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
});

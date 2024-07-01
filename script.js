document.getElementById('download-btn').addEventListener('click', function() {
    const link = document.createElement('a');
    
    link.href = '/home/alex/Code/metzger-studio/manifest.pdf';  // Replace with the actual path to your manifest file
    
    link.download = 'manifest.pdf';
    
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
});

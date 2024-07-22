function initializeLogout() {
    document.getElementById('logoutButton').addEventListener('click', function() {
        document.getElementById('ticketBackground').style.display = 'none';
        document.getElementById('loginBackground').style.display = 'flex';
        document.getElementById('downloadPdfButton').style.display = 'none'; 
    });
}


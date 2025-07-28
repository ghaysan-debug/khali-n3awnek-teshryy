document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  fetch("https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXX/exec", {
    method: "POST",
    body: formData
  })
    .then(() => {
      document.getElementById('statusMsg').textContent = "✅ تم إرسال طلبك بنجاح!";
      this.reset();
    })
    .catch(() => {
      document.getElementById('statusMsg').textContent = "❌ صار مشكل، حاول مرة أخرى.";
    });
});

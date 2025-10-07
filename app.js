function subscribe() {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("ALERTA COMUNIDADE BELA VISTA", {
        body: "Este é um teste de notificação para um alerta!",
        icon: "icone.png"
      });
    } else {
      alert("Permita as notificações para receber os alertas.");
    }
  });
}
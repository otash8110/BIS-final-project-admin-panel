import store from "../store"

export const ConfigureSignalRHandlers = function(signalRConnection) {
  signalRConnection.on("RegistrationRequest", ReceiveNotification)

  return signalRConnection
}

function ReceiveNotification(data) {
  store.commit("signalr/setNotificationMessage", data)
}
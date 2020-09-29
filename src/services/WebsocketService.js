import Pusher from "pusher-js";

const pusher = new Pusher("7abd43c69a30055f7fae", {
  cluster: "eu",
});

const channel = pusher.subscribe("likes");

export default channel;

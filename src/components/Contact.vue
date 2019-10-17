<template>
  <div>
    <h2 id="contact" class="sectionHead">{{ $t('contact.title') }}</h2>

    <div id="contactform" class="contact">
      <form>
        <div id="contactInfo">
          <p>
            <label class="smallInput" for="name">
              Name
              <span class="required">*</span>
            </label>
            <br />
            <input type="text" name="name" id="name" value class="input" />
          </p>
          <p>
            <label class="smallInput" for="email">Email</label>
            <br />
            <input type="text" name="email" id="email" value class="input" />
          </p>
          <p>
            <label class="smallInput" for="phone">Phone</label>
            <br />
            <input type="text" name="phone" id="phone" value class="input" />
          </p>
        </div>
        <p id="emailMessage">
          <label class="smallInput" for="message">
            Message
            <span class="required">*</span>
          </label>
          <br />
          <textarea name="message" id="message" class="input"></textarea>
        </p>

        <input name="send" id="submit_btn" type="button" value="Send Message" @click="submit" />
      </form>
    </div>
    <div class="clear" />
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    submit() {
      var name = document.getElementById("name");
      var message = document.getElementById("message");
      var email = document.getElementById("email");
      var phone = document.getElementById("phone");
      name.className = "input";
      message.className = "input";
      if (name.value == "") {
        name.className = "input error";
        return;
      }
      if (message.value == "") {
        message.className = "input error";
        return;
      }
      window.console.log({
        name: name.value,
        message: message.value,
        email: email.value,
        phone: phone.value
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2#contact:before {
  background-position: right bottom;
}
#contactform input,
#contactform textarea {
  float: none;
  width: 250px;
  padding: 8px;
  margin: 5px 0 10px 0;
  background: #fcfcfc;
  border: 1px solid #eee;
  border-radius: 8px;
  color: #666;
  font-size: 12px;
}
#contactform textarea {
  height: 150px;
  width: 380px;
  margin-bottom: 20px;
}
#contactform input[type="button"] {
  width: inherit;
  float: right;
  clear: both;
  color: #fff;
  border: none;
  cursor: pointer;
  line-height: 30px;
  font-size: 10px;
  text-transform: uppercase;
  height: 30px;
  padding: 0 15px;
  margin: 0;
  background: #444;
  border-radius: 3px;
}
#contactform input[type="button"]:hover {
  background: #000;
}
.required {
  color: red;
}

#contactform input.error,
#contactform textarea.error {
  border: 1px solid red;
  background: #ffd3c9;
}

#contactInfo {
  float: left;
  width: 40%;
}
#emailMessage {
  float: right;
  width: 57%;
}

body.respond #contactInfo,
body.respond #emailMessage {
  float: none;
  width: 100%;
}
body.respond #contactform input[type="button"] {
  float: none;
  width: auto;
}

body.respond #contactform input,
body.respond #contactform textarea {
  width: 90%;
}
</style>

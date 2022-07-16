import React from 'react';

const styles = {
  contentStyle: {
    background: '#7dbbc3',
  },
}

export default function Contact() {
  return (
  
    <div class="columns is-mobile is-centered mt-6">
    <section class="column is-centered is-half">
    <form class="box">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
      <input class="input is-hovered" type="text" placeholder="Name"/>
      </div>
    </div>
  
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
      <input class="input is-hovered" type="text" placeholder="Email"/>
      </div>
    </div>
  
    <label class="label">Message</label>
    <textarea class="textarea is-info" placeholder="Message"></textarea>

    <button class="button is-link is-light">Send</button>
  </form>
  </section>
  
  </div>

  );
}

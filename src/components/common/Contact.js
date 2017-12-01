import React, {Component} from 'react';
import $ from 'jquery';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
    this.updateState = this.updateState.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  successMessage(title, message) {
    return (`<div class="alert alert-success" role="alert">
              <strong>${title}</strong>
              ${message}
             </div>`);
  }

  errorMessage(title, message) {
    return (`<div class="alert alert-danger" role="alert">
              <strong>${title}</strong>
              ${message}
             </div>`);
  }

  updateState(e) {
    let newState = {}
    newState[e.target.id] = e.target.value;
    if (e.target.value === '') {
      $(`#${e.target.id}`).addClass('is-invalid');
      $(`#${e.target.id}`).removeClass('is-valid');
    } else {
      $(`#${e.target.id}`).addClass('is-valid');
      $(`#${e.target.id}`).removeClass('is-invalid');
    }
    this.setState(newState);
  }

  formIsValid() {
    const form = this.state;
    const check = (form.firstName !== '' && form.lastName !== '');

    const result = (check && form.email !== '' && form.message !== '')
      ? true
      : false;

    return result;
  }

  handleSubmit() {
    const form = this.state;
    if (this.formIsValid()) {
      $('.form-control').removeClass('is-valid');
      $('#firstName').val('');
      $('#lastName').val('');
      $('#email').val('');
      $('#message').val('');
      const message = this.successMessage('Success!!', 'Form Submitted');
      $('#alertMessage').append(message);
      setTimeout(() => {
        $('#alertMessage').empty();
        this.setState({firstName: ''});
        this.setState({lastName: ''});
        this.setState({email: ''});
        this.setState({message: ''});
      }, 4000);
      const url = `${window.location.href}contact`;
      $.post(url, form).done((data) => {
        console.log(data);
      });
    } else {
      $('.form-control').removeClass('is-valid');
      for (let i in $('input')) {
        const input = $('input')[i];
        if (input.value === '') {
          $(`#${input.id}`).addClass('is-invalid');
          $(`#${input.id}`).removeClass('is-valid');
        } else {
          $(`#${input.id}`).addClass('is-valid');
          $(`#${input.id}`).removeClass('is-invalid');
        }
      }
      const textarea = $('textarea')[0];
      if ($('textarea')[0].value === '') {
        $(`#${textarea.id}`).addClass('is-invalid');
        $(`#${textarea.id}`).removeClass('is-valid');
      } else {
        $(`#${textarea.id}`).addClass('is-valid');
        $(`#${textarea.id}`).removeClass('is-invalid');
      }
      const message = this.errorMessage('Error!', 'Empty Form Field(s)');
      $('#alertMessage').append(message);
      setTimeout(() => {
        $('#alertMessage').empty();
      }, 4000);
    }
  }

  render() {
    return (<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="contact">
      <div className="my-auto">
        <h2 className="mb-5">Contact</h2>
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <div>
              <div className="form-row">
                <div className="col">
                  <input id="firstName" onChange={this.updateState} type="text" className="form-control" placeholder="First name"/>
                </div>
                <div className="col">
                  <input id="lastName" onChange={this.updateState} type="text" className="form-control" placeholder="Last name (optional)"/>
                </div>
              </div>
            </div>
            <br/>
            <div className="form-group row">
              <div className="col-sm-10">
                <input name="email" onChange={this.updateState} type="email" className="form-control" id="email" placeholder="Email"/>
              </div>
            </div>
            <br/>
            <div className="form-group">
              <textarea id="message" onChange={this.updateState} placeholder="Have a question? Ask me anything." className="form-control" rows="8"></textarea>
            </div>
            <div id="alertMessage"></div>
            <button onClick={this.handleSubmit} type="button" className="btn bg-primary btn-lg btn-block text-white">Submit</button>
            <br/>
          </div>
        </div>
      </div>
    </section>);
  }
}

export {
  Contact
}

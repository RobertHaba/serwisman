{
    const form = document.querySelector('#contactForm');
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    form.setAttribute('novalidate', true);


    const hideFieldError = function(elem) {
        const fieldRow = elem.closest('.form-row');
        const fieldError = fieldRow.querySelector('.field-error');
        if (fieldError !== null) {
            fieldError.remove();
        }
    };

    [...inputs].forEach(elem => {
        elem.addEventListener('input', function() {
            if (!this.checkValidity()) {

                this.classList.add('error');
                document.querySelector('label[for="' + elem.name + '"]').style.background = "url('./img/icons/warning.svg')"

            } else {
                this.classList.remove('error');
                document.querySelector('label[for="' + elem.name + '"]').style.background = ""

                hideFieldError(this);
            }
        });


    });

    const checkFieldsErrors = function(elements) {

        let fieldsAreValid = true;

        [...elements].forEach(elem => {
            if (elem.checkValidity()) {
                hideFieldError(elem);
                document.querySelector('label[for="' + elem.name + '"]').style.background = ""

            } else {

                document.querySelector('label[for="' + elem.name + '"]').style.background = "url('./img/icons/warning.svg')"
                elem.classList.add('error');
                fieldsAreValid = false;
            }
        });

        return fieldsAreValid;
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();


        if (checkFieldsErrors(inputs)) {
            const elements = form.querySelectorAll('input:not(:disabled), textarea:not(:disabled), select:not(:disabled)');

            const dataToSend = new FormData();
            [...elements].forEach(el => dataToSend.append(el.name, el.value));

            const url = form.getAttribute('action');
            const method = form.getAttribute('method');

            const submit = form.querySelector('[type="submit"]');
            submit.disabled = true;
            submit.classList.add('element-is-busy');

            fetch(url, {
                    method: method.toUpperCase(),
                    body: dataToSend
                })
                .then(ret => ret.json())
                .then(ret => {
                    submit.disabled = false;
                    submit.classList.remove('element-is-busy');

                    if (ret.errors) {
                        ret.errors.map(function(el) {
                            return '[name="' + el + '"]'
                        });
                        const selector = ret.errors.join(',');
                        checkFieldsErrors(form.querySelectorAll(selector));

                    } else {
                        if (ret.status === 'ok') {

                            const div = document.getElementById('form-return-text')

                            div.innerText = 'Wysłanie wiadomości nie powiodło się';

                            form.parentElement.insertBefore(div, form);
                            div.innerHTML = 'Wiadomość została wysłana';
                            form.remove();
                        }

                        if (ret.status === 'error') {

                            const div = document.getElementById('form-return-text')
                            div.innerText = 'Wysłanie wiadomości nie powiodło się';
                        }
                    }
                }).catch(_ => {
                    submit.disabled = false;
                    submit.classList.remove('element-is-busy');
                });
        }
    });
}

function popUpForm() {

}
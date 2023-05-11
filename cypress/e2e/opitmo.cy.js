describe('Тестирование программ', function () {

    it('Авторизация', function () {
        cy.reload();
        cy.visit('https://op.itmo.ru/');
        cy.get('#root > div > div.jss416 > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.jss420').click();
        cy.get('#root > div.jss1 > div > div > div:nth-child(1) > div > div > div:nth-child(2) > div > input').type(LOGIN);
        cy.get('#root > div.jss1 > div > div > div:nth-child(1) > div > div > div:nth-child(3) > div > input').type(PASSWORD);
        cy.wait(1000);
        cy.contains('Вы успешно авторизировались!');
        cy.end();
    })

    it('Поиск существующей программы', function () {
        cy.visit('https://op.itmo.ru/work-programs');
        cy.wait(1000);
        cy.get('#root > div.jss1 > div.jss2.jss3 > div > div:nth-child(1) > div > p > div > div > input').type('Ситуационное моделирование');
        cy.wait(1000);
        cy.get('#root > div.jss1 > div.jss2.jss3 > div > div:nth-child(1) > div > div:nth-child(4) > div:nth-child(1) > div > table > tbody > tr:nth-child(1) > td.MuiTableCell-root.MuiTableCell-body.jss1099.MuiTableCell-sizeSmall > a').click();
        cy.wait(1000);
        cy.contains('Одобрено');
        cy.end();
    })
    it('Сущности работают', function () {
        cy.visit('https://op.itmo.ru/work-program/4869/general');
        cy.wait(1000);
        cy.contains('В работе');
        cy.get('#root > div.jss1 > div.jss2.jss4 > div > div:nth-child(1) > div > div.MuiPaper-root.jss220.MuiPaper-elevation1.MuiPaper-rounded > div.MuiPaper-root.MuiStepper-root.MuiStepper-vertical.jss226.MuiPaper-elevation0 > div:nth-child(3) > button').click();
        cy.wait(1000);
        cy.get('#root > div.jss1 > div.jss2.jss4 > div > div:nth-child(1) > div > div.MuiPaper-root.jss220.MuiPaper-elevation1.MuiPaper-rounded > div.jss218 > div > div > button').click();
        cy.wait(1000);
        cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > fieldset > div > label:nth-child(2) > span.MuiButtonBase-root.MuiIconButton-root.jss941.MuiRadio-root.MuiRadio-colorSecondary.MuiIconButton-colorSecondary > span.MuiIconButton-label > input').click();
        cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > div > div.MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth > div > input').type('математика');
        cy.get('body > div.MuiDialog-root').click();
        cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.jss893.MuiDialogActions-spacing > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary > span.MuiButton-label').should('not.be.disabled');
        cy.end();
    })

    

})
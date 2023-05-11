describe('Тестирование заявок', function () {
    
    it('Доступ из ЛК', function () {
        cy.reload();
        cy.visit('https://id.itmo.ru/auth/realms/itmo/protocol/openid-connect/auth?protocol=oauth2&response_type=code&access_type&client_id=profile&redirect_uri=https%3A%2F%2Fid.itmo.ru%2Flogin%2Fcallback&scope=openid%20profile&state=5f7WLHALNj&code_challenge_method=S256&code_challenge=swO1Ex-uEsxz_XpSyomQMtUj1iiUjHJu4Xz89lm6smo');
        cy.get('#username').type(LOGIN);
        cy.get('#password').type(PASSWORD);
        cy.wait(1000);
        cy.get('#kc-login').click();
        cy.visit('https://isu.ifmo.ru/pls/apex/f?p=2437:99:122474976862808::NO::');
        cy.wait(1000);
        cy.get('#main-menu-inner > ul:nth-child(2) > li:nth-child(3) > a').click();
        cy.wait(1000);
        cy.get('#main-menu-inner > ul:nth-child(2) > li:nth-child(2) > a').click();
        cy.wait(1000);
        cy.get('#main-menu-inner > ul:nth-child(2) > li.mm-dropdown.mm-dropdown-root.has-menu-icon.open > ul > li:nth-child(9) > a').click();
        cy.wait(1000);
        cy.contains('Создать');
        cy.end();
         })
    
    it('Создание заявки', function () {
        cy.visit('https://isu.ifmo.ru/pls/apex/f?p=2437:46:111697911083795::NO::');
        cy.wait(1000);
        cy.get('#create_id').click();
        cy.wait(1000);     
        cy.get('#collapse1 > div > div > a').click();
        cy.wait(1000);
        cy.get('#ds_item_485').click();
        cy.wait(1000);
        cy.get('#ds_item_485 > option:nth-child(6)').click();
        cy.wait(1000);
        cy.get('#ds_item_476').type('Это тестовый учебник с очень длинным названием. Очень нужны умные учебники для умных студентов.');
        cy.get('#ds_item_482').type('45');
        cy.get('#ds_item_484').type('Это большая аннотация учебника. Ну или не очень большая аннотация. Сюда бы текст из бота');
        cy.get('#ds_item_547').type('+79812164231');
        cy.get('#ds_item_809').type('example@itmo.ru');
        cy.get('#SUBMIT').click();
        cy.contains('Заявка сохранена');
        cy.end();
         })
    
})
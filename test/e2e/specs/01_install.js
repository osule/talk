module.exports = {
  '@tags': ['install'],

  'User goes to install': (client) => {
    const install = client.page.install();

    install
      .navigate()
      .expect.section('@step1').to.be.present;

  },
  'User clicks get started button': (client) => {
    const step1 = client.page.install().section.step1;

    step1
      .waitForElementVisible('@getStartedButton')
      .click('@getStartedButton');
  },
  'User should see step 2 - Add Organization Name': (client) => {
    const install = client.page.install();

    install
      .expect.section('@step2').to.be.present;
  },
  'User fills step 2': (client) => {
    const step2 = client.page.install().section.step2;
    const {testData} = client.globals;

    step2
      .waitForElementVisible('@organizationNameInput')
      .setValue('@organizationNameInput', testData.organizationName)
      .waitForElementVisible('@saveButton')
      .click('@saveButton');
  },
  'User should see step 3 - Create your account': (client) => {
    const install = client.page.install();

    install
      .expect.section('@step3').to.be.present;
  },
  'User fills step 3': (client) => {
    const step3 = client.page.install().section.step3;
    const {testData: {admin}} = client.globals;

    step3
      .setValue('@emailInput', admin.email)
      .setValue('@usernameInput', admin.username)
      .setValue('@passwordInput', admin.password)
      .setValue('@confirmPasswordInput', admin.password)
      .waitForElementVisible('@saveButton')
      .click('@saveButton');
  },
  'User should see step 4 - Domain Whitelist': (client) => {
    const install = client.page.install();

    install
      .expect.section('@step4').to.be.present;
  },
  'User fills step 4': (client) => {
    const step4 = client.page.install().section.step4;

    step4
      .waitForElementVisible('@domainInput')
      .setValue('@domainInput', client.launchUrl);

    client.keys(client.Keys.ENTER);

    step4
      .waitForElementVisible('@saveButton')
      .click('@saveButton');
  },
  'User should see step 5 - Final Step': (client) => {
    const install = client.page.install();

    install
      .expect.section('@step5').to.be.present;
  },
  after: (client) => {
    client.end();
  }
};

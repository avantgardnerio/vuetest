export default {
    template: `
<div>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <v-data-table
        item-key="id"
        show-select
        v-model="selected"
        :items="people"
        :headers="headers"
    />
<div/>
    `,
    data: () => ({
        message: 'Hello Vue!',
        people: [
            {id: 1, firstName: 'Joe', lastName: 'Scruggs'},
            {id: 2, firstName: 'Sally', lastName: 'MacLananne'},
        ],
        headers: [
            {text: 'First Name', value: 'firstName'},
        ],
        selected: [{id: 3, firstName: 'Ned', lastName: 'Kelly'}],
    }),
}

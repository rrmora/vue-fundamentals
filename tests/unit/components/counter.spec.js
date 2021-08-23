import { shallowMount } from "@vue/test-utils"
import Counter from '@/Componentes/Counter'

describe('Counter Component', () => {

    // it('dedbe ded hacer match con el snapshot', () => {
    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html()).toMatchSnapshot ()
    // })

    test('H2 debe tener el valor por defecto "Counter"', () => {
        const wrapper = shallowMount(Counter)
        const h2 = wrapper.find('h2')
        console.log(h2.text())

        expect(h2.text()).toBe('Counter')
    })

    test('El valor por defecto debe de ser 100 en p', () => {
        const wrapper = shallowMount(Counter)
        const pCounter = wrapper.find('[data-testid="counter"]')
        expect(pCounter.text()).toBe('10')
    })

    test('Debe incrementar el valor del contador', async () => {
        const wrapper = shallowMount(Counter)
        const btn = wrapper.find('button')
        await btn.trigger('click')
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('11')
    })
})
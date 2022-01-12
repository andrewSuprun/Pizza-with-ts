# Pizza-with-ts
Привіт, приготуємо піцу?

Mate Pizza Shot придбала новий PizzaMaker для автоматичного приготування піци. Та постачальник забув встановити операційну систему. Маємо два варіанти — викинути залізяку або самостійно її запрограмувати. Ми легких шляхів не шукаємо. Згодні?

Ось що нам потрібно:

тип Topping, який містить всі типи начинок, що є в нашій піцерії. Зараз це cheese, peppers, salami, pepperoni, mushrooms, olives.
клас Pizza, в конструктор якого ми передаємо name (назву піцци) і toppings (масив зі списком начинок). Додатково додай поле createdOn з поточною датою (new Date()), щоб знати коли піцца була приготовлена.
інтерфейс замовлення Order з полями name і toppings (як у Pizza)
клас PizzaMaker (наша залізяка) без конструктора, але зі статичним методом create, який приймає об'єкт замовлення та повертає піццу.
Приклад:

const pizza = PizzaMaker.create({
  name: 'Margarita',
  toppings: ['cheese', 'pepperoni', 'peppers'],
});

pizza === {
  name: 'Margarita',
  toppings: ['cheese', 'pepperoni', 'peppers'],
  createdOn: 'Wed Oct 06 2021 16:49:52 GMT+0300 (Eastern European Summer Time)',
}

@MateAcademy

test('Devo conhecer as principais assertivas do jest', ()=>{
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
});

test('Deve saber trabalhar com objetos', () =>{
    const obj = {name: 'John', mail: 'john@mail.com'}
    expect(obj).toHaveProperty('name', 'John');
});
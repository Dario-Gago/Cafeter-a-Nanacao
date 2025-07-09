const request = require('supertest')
const app = require('../index')

describe('Operaciones CRUD de cafes', () => {
  // 1. Testea que GET /cafes devuelve 200 y un array con al menos 1 objeto
  it('GET /cafes debe responder con status 200 y un array con al menos un objeto', async () => {
    const res = await request(app).get('/cafes')
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body.length).toBeGreaterThan(0)
    expect(typeof res.body[0]).toBe('object')
  })

  // 2. Comprueba que DELETE /cafes/:id con id inexistente devuelve 404
  it('DELETE /cafes/:id con un id inexistente debe responder con status 404', async () => {
    const idInexistente = '12345'
    const res = await request(app)
      .delete(`/cafes/${idInexistente}`)
      .set('Authorization', 'Bearer token-falso') // ← aquí

    expect(res.statusCode).toBe(404)
  })

  // 3. POST /cafes agrega un nuevo café y devuelve status 201
  it('POST /cafes debe agregar un nuevo café y responder con status 201', async () => {
    const nuevoCafe = {
      id: '999',
      nombre: 'Café nuevo test'
    }

    const res = await request(app).post('/cafes').send(nuevoCafe)

    expect(res.statusCode).toBe(201)
    expect(res.body).toEqual(
      expect.arrayContaining([expect.objectContaining(nuevoCafe)])
    )
  })

  // 4. PUT /cafes/:id con id diferente en payload debe devolver 400
  it('PUT /cafes/:id debe devolver status 400 si el id en params es distinto al del body', async () => {
    const idParams = '1'
    const payload = {
      id: '2',
      nombre: 'Café editado'
    }
    const res = await request(app).put(`/cafes/${idParams}`).send(payload)
    expect(res.statusCode).toBe(400)
  })
})

import Actions from '../actions/blocks'
import Block from '../models/Block'
import Colonel from '../Colonel'

describe('ColonelKurtz', function() {
  let app
  let el

  beforeEach(function(done) {
    el = document.createElement('div')
    app = new Colonel({
      el: el,
      blocks: [new Block({ type: 'section' })],
      blockTypes: [{ id: 'section' }]
    })

    app.start(done)
  })

  it('renders to the provided element', function() {
    expect(el.innerHTML).not.toEqual('')
  })

  it('returns blocks when converting to JSON', function() {
    let json = app.toJSON()

    expect(json).toHaveLength(1)
  })

  describe('when a create action is sent to the app', function() {
    beforeEach(function(done) {
      app.push(Actions.create, 'section', done)
    })

    it('should prepend a new block', function() {
      expect(app.state.blocks[0]).toHaveProperty('type', 'section')
    })

    it('should flag the block as client-only', function() {
      expect(app.state.blocks[0]).toHaveProperty('clientOnly', true)
    })
  })

  describe('when a destroy action is sent to the app', function() {
    beforeEach(function(done) {
      app.push(Actions.destroy, app.state.blocks[0], done)
    })

    it('should prepend a new block', function() {
      expect(app.state.blocks).toHaveLength(0)
    })
  })

  describe('when an update action is sent to the app', function() {
    beforeEach(function(done) {
      app.push(Actions.update, [app.state.blocks[0], { foo: 'bar' }], done)
    })

    it('should update the content of that block', function() {
      expect(app.state.blocks[0]).toHaveProperty('content.foo', 'bar')
    })
  })

  describe('when a move action is sent to the app', function() {
    it('should prepend a new block', function() {
      app.push(Actions.create, 'section')

      let block = app.state.blocks[0]

      app.push(Actions.move, [block, 1])

      expect(app.state.blocks).toContain(block)
    })
  })
})

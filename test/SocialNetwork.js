const InterviewTask = artifacts.require('./InterviewTask.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('InterviewTask', ([deployer, creator, buyer]) => {
  let interviewTask

  before(async () => {
    interviewTask = await InterviewTask.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await interviewTask.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })
  })

  describe('orders', async () => {
    let result, orderCount

    before(async () => {
      result = await interviewTask.createOrder('This is my first order', { from: creator })
      orderCount = await interviewTask.orderCount()
    })

    it('creates orders', async () => {
      // IF SUCESSFUL
      assert.equal(orderCount, 1)
      const event = result.logs[0].args
      assert.equal(event.price, '0', 'price is correct')
      assert.equal(event.creator, creator, 'creator is correct')

      // IF FAILED
      await interviewTask.createOrder('', { from: creator }).should.be.rejected;
    })

    it('buys orders', async () => {
      assert.equal(orderCount, 1)
      const event = result.logs[1].args
      assert.equal(order.price, '0', 'price is correct')
      assert.equal(event.orderNum.toNumber(), orderCount.toNumber(), 'order number is correct')
    })

  })
})

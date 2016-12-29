var vm = new Vue({
  el: '#app',
  data: {
    consts: {
      maxHealth: 100,
      maxAttackForce: 10,
      maxSpeccialAttackForce: 15,
      maxMonsterAttackForce: 12
    },
    game: {
      myHealth: 100,
      monsterHealth: 100,
      started: false
    },
    logs: [
    ]
  },
  computed: {
    myWidth: function() {
      return this._getWidth(this.game.myHealth)
    },
    monsterWidth: function() {
      return this._getWidth(this.game.monsterHealth)
    }
  },
  methods: {
    startGame: function() {
      var g = this.game;
      g.myHealth = this.consts.maxHealth;
      g.monsterHealth = this.consts.maxHealth;
      g.started = true;
      this.logs = []
    },
    attack: function() {
      this._attack(this.consts.maxAttackForce)
    },
    specialAttack: function() {
      this._attack(this.consts.maxSpeccialAttackForce)
    },
    heal: function() {
      var g = this.game;
      this._heal();
      this._appendToLog({
        msg: 'Player heals himself for 10',
        clazz: 'player-turn'
      });
      this._monsterAttack();
    },
    giveUp: function() {
      var g = this.game;
      g.started = false;
    },
    _attack: function(maxForce) {
      if (this._myAttack(maxForce)){
        this._monsterAttack();
      }
    },
    _myAttack: function(maxForce) {
      var g = this.game;
      var myAttackForce = this._attackForce(maxForce);
      g.monsterHealth -= myAttackForce;

      this._appendToLog({
        msg: 'Player hits monster for ' + myAttackForce,
        clazz: 'player-turn'
      });

      return this._checkWin(g.monsterHealth, 'You won!');
    },
    _monsterAttack: function() {
      var g = this.game;
      var monsterAttackForce = this._attackForce(this.consts.maxMonsterAttackForce);
      g.myHealth -= monsterAttackForce;

      this._appendToLog({
        msg: 'Monster hits player for ' + monsterAttackForce,
        clazz: 'monster-turn'
      });

      return this._checkWin(g.myHealth, 'You lost!');
    },
    _checkWin: function(val, msg) {
      if (val <= 0) {
        alert(msg);
        this.game.started = false;
        return false;
      }
      return true;
    },
    _attackForce: function(maxForce) {
      return Math.round(Math.random() * maxForce);
    },
    _heal: function() {
      var g= this.game;
      g.myHealth = g.myHealth + 10 > this.consts.maxHealth ? 100 : g.myHealth + 10;
    },
    _getWidth: function(health) {
      var health = this._getValue(health)
      return 'width: ' + (health / this.consts.maxHealth) * 100 + '%;';
    },
    _getValue: function(val) {
      return val > 0 ? val : 0;
    },
    _appendToLog: function(val) {
      this.logs.unshift(val);
    }
  }
})
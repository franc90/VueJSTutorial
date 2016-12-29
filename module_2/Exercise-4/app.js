new Vue({
  el: '#exercise',
  data: {
  	startEffectClasses: {
    	highlight: false,
    	shrink: false
    },
    clazzName: '',
    blackBox: false,
    clazz: '',
    input: '',

    progress: {
			width: '0px',
			height: '25px',
			backgroundColor: 'red'
		},
		progressWidth: 0,
		maxProgressWidth: 400,

  },
  methods: {
    startEffect: function() {
    	var clazzez = this.startEffectClasses;
    	clazzez.highlight = true;
    	setInterval(function() {
    		clazzez.highlight = !clazzez.highlight;
    		clazzez.shrink = !clazzez.shrink;
    	}, 2000);
    },
    startProgress: function() {
    	var vm = this;
    	var pb = this.progress;
    	setInterval(function() {
    		vm.progressWidth += 10;
    		if (vm.progressWidth <= vm.maxProgressWidth) {
    			pb.width = vm.progressWidth + 'px';
    		}
    		console.log(vm.progressWidth)
    		console.log(pb)
    	}, 500)
    }
  }
});

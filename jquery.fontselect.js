/*
 * jQuery.fontselect - A font selector for the Google Web Fonts api
 * Tom Moor, http://tommoor.com
 * Copyright (c) 2011 Tom Moor
 * MIT Licensed
 * @version 0.1
*/

(function($){

  $.fn.fontselect = function(options) {

     var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

     var fonts = [
        "ABeeZee:",
        "ABeeZee:italic",
        "Abel:",
        "Abril+Fatface:",
        "Aclonica:",
        "Acme:",
        "Actor:",
        "Adamina:",
        "Advent+Pro:100",
        "Advent+Pro:200",
        "Advent+Pro:300",
        "Advent+Pro:",
        "Advent+Pro:500",
        "Advent+Pro:600",
        "Advent+Pro:700",
        "Aguafina+Script:",
        "Akronim:",
        "Aladin:",
        "Aldrich:",
        "Alef:",
        "Alef:700",
        "Alegreya:",
        "Alegreya:italic",
        "Alegreya:700",
        "Alegreya:700italic",
        "Alegreya:900",
        "Alegreya:900italic",
        "Alegreya+SC:",
        "Alegreya+SC:italic",
        "Alegreya+SC:700",
        "Alegreya+SC:700italic",
        "Alegreya+SC:900",
        "Alegreya+SC:900italic",
        "Alegreya+Sans:100",
        "Alegreya+Sans:100italic",
        "Alegreya+Sans:300",
        "Alegreya+Sans:300italic",
        "Alegreya+Sans:",
        "Alegreya+Sans:italic",
        "Alegreya+Sans:500",
        "Alegreya+Sans:500italic",
        "Alegreya+Sans:700",
        "Alegreya+Sans:700italic",
        "Alegreya+Sans:800",
        "Alegreya+Sans:800italic",
        "Alegreya+Sans:900",
        "Alegreya+Sans:900italic",
        "Alegreya+Sans+SC:100",
        "Alegreya+Sans+SC:100italic",
        "Alegreya+Sans+SC:300",
        "Alegreya+Sans+SC:300italic",
        "Alegreya+Sans+SC:",
        "Alegreya+Sans+SC:italic",
        "Alegreya+Sans+SC:500",
        "Alegreya+Sans+SC:500italic",
        "Alegreya+Sans+SC:700",
        "Alegreya+Sans+SC:700italic",
        "Alegreya+Sans+SC:800",
        "Alegreya+Sans+SC:800italic",
        "Alegreya+Sans+SC:900",
        "Alegreya+Sans+SC:900italic",
        "Alex+Brush:",
        "Alfa+Slab+One:",
        "Alice:",
        "Alike:",
        "Alike+Angular:",
        "Allan:",
        "Allan:700",
        "Allerta:",
        "Allerta+Stencil:",
        "Allura:",
        "Almendra:",
        "Almendra:italic",
        "Almendra:700",
        "Almendra:700italic",
        "Almendra+Display:",
        "Almendra+SC:",
        "Amarante:",
        "Amaranth:",
        "Amaranth:italic",
        "Amaranth:700",
        "Amaranth:700italic",
        "Amatic+SC:",
        "Amatic+SC:700",
        "Amethysta:",
        "Amiri:",
        "Amiri:italic",
        "Amiri:700",
        "Amiri:700italic",
        "Amita:",
        "Amita:700",
        "Anaheim:",
        "Andada:",
        "Andika:",
        "Angkor:",
        "Annie+Use+Your+Telescope:",
        "Anonymous+Pro:",
        "Anonymous+Pro:italic",
        "Anonymous+Pro:700",
        "Anonymous+Pro:700italic",
        "Antic:",
        "Antic+Didone:",
        "Antic+Slab:",
        "Anton:",
        "Arapey:",
        "Arapey:italic",
        "Arbutus:",
        "Arbutus+Slab:",
        "Architects+Daughter:",
        "Archivo+Black:",
        "Archivo+Narrow:",
        "Archivo+Narrow:italic",
        "Archivo+Narrow:700",
        "Archivo+Narrow:700italic",
        "Arimo:",
        "Arimo:italic",
        "Arimo:700",
        "Arimo:700italic",
        "Arizonia:",
        "Armata:",
        "Artifika:",
        "Arvo:",
        "Arvo:italic",
        "Arvo:700",
        "Arvo:700italic",
        "Arya:",
        "Arya:700",
        "Asap:",
        "Asap:italic",
        "Asap:700",
        "Asap:700italic",
        "Asar:",
        "Asset:",
        "Astloch:",
        "Astloch:700",
        "Asul:",
        "Asul:700",
        "Atomic+Age:",
        "Aubrey:",
        "Audiowide:",
        "Autour+One:",
        "Average:",
        "Average+Sans:",
        "Averia+Gruesa+Libre:",
        "Averia+Libre:300",
        "Averia+Libre:300italic",
        "Averia+Libre:",
        "Averia+Libre:italic",
        "Averia+Libre:700",
        "Averia+Libre:700italic",
        "Averia+Sans+Libre:300",
        "Averia+Sans+Libre:300italic",
        "Averia+Sans+Libre:",
        "Averia+Sans+Libre:italic",
        "Averia+Sans+Libre:700",
        "Averia+Sans+Libre:700italic",
        "Averia+Serif+Libre:300",
        "Averia+Serif+Libre:300italic",
        "Averia+Serif+Libre:",
        "Averia+Serif+Libre:italic",
        "Averia+Serif+Libre:700",
        "Averia+Serif+Libre:700italic",
        "Bad+Script:",
        "Balthazar:",
        "Bangers:",
        "Basic:",
        "Battambang:",
        "Battambang:700",
        "Baumans:",
        "Bayon:",
        "Belgrano:",
        "Belleza:",
        "BenchNine:300",
        "BenchNine:",
        "BenchNine:700",
        "Bentham:",
        "Berkshire+Swash:",
        "Bevan:",
        "Bigelow+Rules:",
        "Bigshot+One:",
        "Bilbo:",
        "Bilbo+Swash+Caps:",
        "Biryani:200",
        "Biryani:300",
        "Biryani:",
        "Biryani:600",
        "Biryani:700",
        "Biryani:800",
        "Biryani:900",
        "Bitter:",
        "Bitter:italic",
        "Bitter:700",
        "Black+Ops+One:",
        "Bokor:",
        "Bonbon:",
        "Boogaloo:",
        "Bowlby+One:",
        "Bowlby+One+SC:",
        "Brawler:",
        "Bree+Serif:",
        "Bubblegum+Sans:",
        "Bubbler+One:",
        "Buda:300",
        "Buenard:",
        "Buenard:700",
        "Butcherman:",
        "Butterfly+Kids:",
        "Cabin:",
        "Cabin:italic",
        "Cabin:500",
        "Cabin:500italic",
        "Cabin:600",
        "Cabin:600italic",
        "Cabin:700",
        "Cabin:700italic",
        "Cabin+Condensed:",
        "Cabin+Condensed:500",
        "Cabin+Condensed:600",
        "Cabin+Condensed:700",
        "Cabin+Sketch:",
        "Cabin+Sketch:700",
        "Caesar+Dressing:",
        "Cagliostro:",
        "Calligraffitti:",
        "Cambay:",
        "Cambay:italic",
        "Cambay:700",
        "Cambay:700italic",
        "Cambo:",
        "Candal:",
        "Cantarell:",
        "Cantarell:italic",
        "Cantarell:700",
        "Cantarell:700italic",
        "Cantata+One:",
        "Cantora+One:",
        "Capriola:",
        "Cardo:",
        "Cardo:italic",
        "Cardo:700",
        "Carme:",
        "Carrois+Gothic:",
        "Carrois+Gothic+SC:",
        "Carter+One:",
        "Catamaran:100",
        "Catamaran:200",
        "Catamaran:300",
        "Catamaran:",
        "Catamaran:500",
        "Catamaran:600",
        "Catamaran:700",
        "Catamaran:800",
        "Catamaran:900",
        "Caudex:",
        "Caudex:italic",
        "Caudex:700",
        "Caudex:700italic",
        "Caveat:",
        "Caveat:700",
        "Caveat+Brush:",
        "Cedarville+Cursive:",
        "Ceviche+One:",
        "Changa+One:",
        "Changa+One:italic",
        "Chango:",
        "Chau+Philomene+One:",
        "Chau+Philomene+One:italic",
        "Chela+One:",
        "Chelsea+Market:",
        "Chenla:",
        "Cherry+Cream+Soda:",
        "Cherry+Swash:",
        "Cherry+Swash:700",
        "Chewy:",
        "Chicle:",
        "Chivo:",
        "Chivo:italic",
        "Chivo:900",
        "Chivo:900italic",
        "Chonburi:",
        "Cinzel:",
        "Cinzel:700",
        "Cinzel:900",
        "Cinzel+Decorative:",
        "Cinzel+Decorative:700",
        "Cinzel+Decorative:900",
        "Clicker+Script:",
        "Coda:",
        "Coda:800",
        "Coda+Caption:800",
        "Codystar:300",
        "Codystar:",
        "Combo:",
        "Comfortaa:300",
        "Comfortaa:",
        "Comfortaa:700",
        "Coming+Soon:",
        "Concert+One:",
        "Condiment:",
        "Content:",
        "Content:700",
        "Contrail+One:",
        "Convergence:",
        "Cookie:",
        "Copse:",
        "Corben:",
        "Corben:700",
        "Courgette:",
        "Cousine:",
        "Cousine:italic",
        "Cousine:700",
        "Cousine:700italic",
        "Coustard:",
        "Coustard:900",
        "Covered+By+Your+Grace:",
        "Crafty+Girls:",
        "Creepster:",
        "Crete+Round:",
        "Crete+Round:italic",
        "Crimson+Text:",
        "Crimson+Text:italic",
        "Crimson+Text:600",
        "Crimson+Text:600italic",
        "Crimson+Text:700",
        "Crimson+Text:700italic",
        "Croissant+One:",
        "Crushed:",
        "Cuprum:",
        "Cuprum:italic",
        "Cuprum:700",
        "Cuprum:700italic",
        "Cutive:",
        "Cutive+Mono:",
        "Damion:",
        "Dancing+Script:",
        "Dancing+Script:700",
        "Dangrek:",
        "Dawning+of+a+New+Day:",
        "Days+One:",
        "Dekko:",
        "Delius:",
        "Delius+Swash+Caps:",
        "Delius+Unicase:",
        "Delius+Unicase:700",
        "Della+Respira:",
        "Denk+One:",
        "Devonshire:",
        "Dhurjati:",
        "Didact+Gothic:",
        "Diplomata:",
        "Diplomata+SC:",
        "Domine:",
        "Domine:700",
        "Donegal+One:",
        "Doppio+One:",
        "Dorsa:",
        "Dosis:200",
        "Dosis:300",
        "Dosis:",
        "Dosis:500",
        "Dosis:600",
        "Dosis:700",
        "Dosis:800",
        "Dr+Sugiyama:",
        "Droid+Sans:",
        "Droid+Sans:700",
        "Droid+Sans+Mono:",
        "Droid+Serif:",
        "Droid+Serif:italic",
        "Droid+Serif:700",
        "Droid+Serif:700italic",
        "Duru+Sans:",
        "Dynalight:",
        "EB+Garamond:",
        "Eagle+Lake:",
        "Eater:",
        "Economica:",
        "Economica:italic",
        "Economica:700",
        "Economica:700italic",
        "Eczar:",
        "Eczar:500",
        "Eczar:600",
        "Eczar:700",
        "Eczar:800",
        "Ek+Mukta:200",
        "Ek+Mukta:300",
        "Ek+Mukta:",
        "Ek+Mukta:500",
        "Ek+Mukta:600",
        "Ek+Mukta:700",
        "Ek+Mukta:800",
        "Electrolize:",
        "Elsie:",
        "Elsie:900",
        "Elsie+Swash+Caps:",
        "Elsie+Swash+Caps:900",
        "Emblema+One:",
        "Emilys+Candy:",
        "Engagement:",
        "Englebert:",
        "Enriqueta:",
        "Enriqueta:700",
        "Erica+One:",
        "Esteban:",
        "Euphoria+Script:",
        "Ewert:",
        "Exo:100",
        "Exo:100italic",
        "Exo:200",
        "Exo:200italic",
        "Exo:300",
        "Exo:300italic",
        "Exo:",
        "Exo:italic",
        "Exo:500",
        "Exo:500italic",
        "Exo:600",
        "Exo:600italic",
        "Exo:700",
        "Exo:700italic",
        "Exo:800",
        "Exo:800italic",
        "Exo:900",
        "Exo:900italic",
        "Exo+2:100",
        "Exo+2:100italic",
        "Exo+2:200",
        "Exo+2:200italic",
        "Exo+2:300",
        "Exo+2:300italic",
        "Exo+2:",
        "Exo+2:italic",
        "Exo+2:500",
        "Exo+2:500italic",
        "Exo+2:600",
        "Exo+2:600italic",
        "Exo+2:700",
        "Exo+2:700italic",
        "Exo+2:800",
        "Exo+2:800italic",
        "Exo+2:900",
        "Exo+2:900italic",
        "Expletus+Sans:",
        "Expletus+Sans:italic",
        "Expletus+Sans:500",
        "Expletus+Sans:500italic",
        "Expletus+Sans:600",
        "Expletus+Sans:600italic",
        "Expletus+Sans:700",
        "Expletus+Sans:700italic",
        "Fanwood+Text:",
        "Fanwood+Text:italic",
        "Fascinate:",
        "Fascinate+Inline:",
        "Faster+One:",
        "Fasthand:",
        "Fauna+One:",
        "Federant:",
        "Federo:",
        "Felipa:",
        "Fenix:",
        "Finger+Paint:",
        "Fira+Mono:",
        "Fira+Mono:700",
        "Fira+Sans:300",
        "Fira+Sans:300italic",
        "Fira+Sans:",
        "Fira+Sans:italic",
        "Fira+Sans:500",
        "Fira+Sans:500italic",
        "Fira+Sans:700",
        "Fira+Sans:700italic",
        "Fjalla+One:",
        "Fjord+One:",
        "Flamenco:300",
        "Flamenco:",
        "Flavors:",
        "Fondamento:",
        "Fondamento:italic",
        "Fontdiner+Swanky:",
        "Forum:",
        "Francois+One:",
        "Freckle+Face:",
        "Fredericka+the+Great:",
        "Fredoka+One:",
        "Freehand:",
        "Fresca:",
        "Frijole:",
        "Fruktur:",
        "Fugaz+One:",
        "GFS+Didot:",
        "GFS+Neohellenic:",
        "GFS+Neohellenic:italic",
        "GFS+Neohellenic:700",
        "GFS+Neohellenic:700italic",
        "Gabriela:",
        "Gafata:",
        "Galdeano:",
        "Galindo:",
        "Gentium+Basic:",
        "Gentium+Basic:italic",
        "Gentium+Basic:700",
        "Gentium+Basic:700italic",
        "Gentium+Book+Basic:",
        "Gentium+Book+Basic:italic",
        "Gentium+Book+Basic:700",
        "Gentium+Book+Basic:700italic",
        "Geo:",
        "Geo:italic",
        "Geostar:",
        "Geostar+Fill:",
        "Germania+One:",
        "Gidugu:",
        "Gilda+Display:",
        "Give+You+Glory:",
        "Glass+Antiqua:",
        "Glegoo:",
        "Glegoo:700",
        "Gloria+Hallelujah:",
        "Goblin+One:",
        "Gochi+Hand:",
        "Gorditas:",
        "Gorditas:700",
        "Goudy+Bookletter+1911:",
        "Graduate:",
        "Grand+Hotel:",
        "Gravitas+One:",
        "Great+Vibes:",
        "Griffy:",
        "Gruppo:",
        "Gudea:",
        "Gudea:italic",
        "Gudea:700",
        "Gurajada:",
        "Habibi:",
        "Halant:300",
        "Halant:",
        "Halant:500",
        "Halant:600",
        "Halant:700",
        "Hammersmith+One:",
        "Hanalei:",
        "Hanalei+Fill:",
        "Handlee:",
        "Hanuman:",
        "Hanuman:700",
        "Happy+Monkey:",
        "Headland+One:",
        "Henny+Penny:",
        "Herr+Von+Muellerhoff:",
        "Hind:300",
        "Hind:",
        "Hind:500",
        "Hind:600",
        "Hind:700",
        "Hind+Siliguri:300",
        "Hind+Siliguri:",
        "Hind+Siliguri:500",
        "Hind+Siliguri:600",
        "Hind+Siliguri:700",
        "Hind+Vadodara:300",
        "Hind+Vadodara:",
        "Hind+Vadodara:500",
        "Hind+Vadodara:600",
        "Hind+Vadodara:700",
        "Holtwood+One+SC:",
        "Homemade+Apple:",
        "Homenaje:",
        "IM+Fell+DW+Pica:",
        "IM+Fell+DW+Pica:italic",
        "IM+Fell+DW+Pica+SC:",
        "IM+Fell+Double+Pica:",
        "IM+Fell+Double+Pica:italic",
        "IM+Fell+Double+Pica+SC:",
        "IM+Fell+English:",
        "IM+Fell+English:italic",
        "IM+Fell+English+SC:",
        "IM+Fell+French+Canon:",
        "IM+Fell+French+Canon:italic",
        "IM+Fell+French+Canon+SC:",
        "IM+Fell+Great+Primer:",
        "IM+Fell+Great+Primer:italic",
        "IM+Fell+Great+Primer+SC:",
        "Iceberg:",
        "Iceland:",
        "Imprima:",
        "Inconsolata:",
        "Inconsolata:700",
        "Inder:",
        "Indie+Flower:",
        "Inika:",
        "Inika:700",
        "Inknut+Antiqua:300",
        "Inknut+Antiqua:",
        "Inknut+Antiqua:500",
        "Inknut+Antiqua:600",
        "Inknut+Antiqua:700",
        "Inknut+Antiqua:800",
        "Inknut+Antiqua:900",
        "Irish+Grover:",
        "Istok+Web:",
        "Istok+Web:italic",
        "Istok+Web:700",
        "Istok+Web:700italic",
        "Italiana:",
        "Italianno:",
        "Itim:",
        "Jacques+Francois:",
        "Jacques+Francois+Shadow:",
        "Jaldi:",
        "Jaldi:700",
        "Jim+Nightshade:",
        "Jockey+One:",
        "Jolly+Lodger:",
        "Josefin+Sans:100",
        "Josefin+Sans:100italic",
        "Josefin+Sans:300",
        "Josefin+Sans:300italic",
        "Josefin+Sans:",
        "Josefin+Sans:italic",
        "Josefin+Sans:600",
        "Josefin+Sans:600italic",
        "Josefin+Sans:700",
        "Josefin+Sans:700italic",
        "Josefin+Slab:100",
        "Josefin+Slab:100italic",
        "Josefin+Slab:300",
        "Josefin+Slab:300italic",
        "Josefin+Slab:",
        "Josefin+Slab:italic",
        "Josefin+Slab:600",
        "Josefin+Slab:600italic",
        "Josefin+Slab:700",
        "Josefin+Slab:700italic",
        "Joti+One:",
        "Judson:",
        "Judson:italic",
        "Judson:700",
        "Julee:",
        "Julius+Sans+One:",
        "Junge:",
        "Jura:300",
        "Jura:",
        "Jura:500",
        "Jura:600",
        "Just+Another+Hand:",
        "Just+Me+Again+Down+Here:",
        "Kadwa:",
        "Kadwa:700",
        "Kalam:300",
        "Kalam:",
        "Kalam:700",
        "Kameron:",
        "Kameron:700",
        "Kanit:100",
        "Kanit:100italic",
        "Kanit:200",
        "Kanit:200italic",
        "Kanit:300",
        "Kanit:300italic",
        "Kanit:"];

    var settings = {
      style: 'font-select',
      placeholder: 'Select a font',
      lookahead: 2,
      api: '//fonts.googleapis.com/css?family='
    };

    var Fontselect = (function(){

      function Fontselect(original, o){
        this.$original = $(original);
        this.options = o;
        this.active = false;
        this.setupHtml();
        this.getVisibleFonts();
        this.bindEvents();

        var font = this.$original.val();
        if (font) {
          this.updateSelected();
          this.addFontLink(font);
        }
      }

      Fontselect.prototype.bindEvents = function(){

        $('li', this.$results)
        .click(__bind(this.selectFont, this))
        .mouseenter(__bind(this.activateFont, this))
        .mouseleave(__bind(this.deactivateFont, this));

        $('span', this.$select).click(__bind(this.toggleDrop, this));
        this.$arrow.click(__bind(this.toggleDrop, this));
      };

      Fontselect.prototype.toggleDrop = function(ev){

        if(this.active){
          this.$element.removeClass('font-select-active');
          this.$drop.hide();
          clearInterval(this.visibleInterval);

        } else {
          this.$element.addClass('font-select-active');
          this.$drop.show();
          this.moveToSelected();
          this.visibleInterval = setInterval(__bind(this.getVisibleFonts, this), 500);
        }

        this.active = !this.active;
      };

      Fontselect.prototype.selectFont = function(){

        var font = $('li.active', this.$results).data('value');
        this.$original.val(font).change();
        this.updateSelected();
        this.toggleDrop();
      };

      Fontselect.prototype.moveToSelected = function(){

        var $li, font = this.$original.val();

        if (font){
          $li = $("li[data-value='"+ font +"']", this.$results);
        } else {
          $li = $("li", this.$results).first();
        }

        this.$results.scrollTop($li.addClass('active').position().top);
      };

      Fontselect.prototype.activateFont = function(ev){
        $('li.active', this.$results).removeClass('active');
        $(ev.currentTarget).addClass('active');
      };

      Fontselect.prototype.deactivateFont = function(ev){

        $(ev.currentTarget).removeClass('active');
      };

      Fontselect.prototype.updateSelected = function(){

        var font = this.$original.val();
        $('span', this.$element).text(this.toReadable(font)).css(this.toStyle(font));
      };

      Fontselect.prototype.setupHtml = function(){

        this.$original.empty().hide();
        this.$element = $('<div>', {'class': this.options.style});
        this.$arrow = $('<div><b></b></div>');
        this.$select = $('<a><span>'+ this.options.placeholder +'</span></a>');
        this.$drop = $('<div>', {'class': 'fs-drop'});
        this.$results = $('<ul>', {'class': 'fs-results'});
        this.$original.after(this.$element.append(this.$select.append(this.$arrow)).append(this.$drop));
        this.$drop.append(this.$results.append(this.fontsAsHtml())).hide();
      };

      Fontselect.prototype.fontsAsHtml = function(){

        var l = fonts.length;
        var r, s, h = '';

        for(var i=0; i<l; i++){
          r = this.toReadable(fonts[i]);
          s = this.toStyle(fonts[i]);
          h += '<li data-value="'+ fonts[i] +'" style="font-family: '+s['font-family'] +'; font-weight: '+s['font-weight'] +'">'+ r +'</li>';
        }

        return h;
      };

      Fontselect.prototype.toReadable = function(font){
        return font.replace(/[\+|:]/g, ' ');
      };

      Fontselect.prototype.toStyle = function(font){
        var t = font.split(':');
        return {'font-family': this.toReadable(t[0]), 'font-weight': (t[1] || 400)};
      };

      Fontselect.prototype.getVisibleFonts = function(){

        if(this.$results.is(':hidden')) return;

        var fs = this;
        var top = this.$results.scrollTop();
        var bottom = top + this.$results.height();

        if(this.options.lookahead){
          var li = $('li', this.$results).first().height();
          bottom += li*this.options.lookahead;
        }

        $('li', this.$results).each(function(){

          var ft = $(this).position().top+top;
          var fb = ft + $(this).height();

          if ((fb >= top) && (ft <= bottom)){
            var font = $(this).data('value');
            fs.addFontLink(font);
          }

        });
      };

      Fontselect.prototype.addFontLink = function(font){

        var link = this.options.api + font;

        if ($("link[href*='" + font + "']").length === 0){
			$('link:last').after('<link href="' + link + '" rel="stylesheet" type="text/css">');
		}
      };

      return Fontselect;
    })();

    return this.each(function(options) {
      // If options exist, lets merge them
      if (options) $.extend( settings, options );

      return new Fontselect(this, settings);
    });

  };
})(jQuery);

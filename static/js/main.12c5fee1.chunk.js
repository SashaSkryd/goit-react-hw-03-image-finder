(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{3:function(e,t,a){e.exports={App:"App_App__1lwfN",Searchbar:"App_Searchbar__2BXPv",SearchForm:"App_SearchForm__38gUw",SearchFormButton:"App_SearchFormButton__3IWZR",SearchFormButtonLabel:"App_SearchFormButtonLabel__3kqul",SearchFormInput:"App_SearchFormInput__1w6M4",ImageGallery:"App_ImageGallery__1PwgV",ImageGalleryItem:"App_ImageGalleryItem__33O2Q",ImageGalleryItemImage:"App_ImageGalleryItemImage__2GKxG",Overlay:"App_Overlay__2QA3E",Modal:"App_Modal__2WUkM",Button:"App_Button__2IUlK",containerButton:"App_containerButton__38X8W"}},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),o=a(19),s=a.n(o),l=a(10),i=a(5),h=a(6),u=a(8),p=a(7),m=a(20),d=a.n(m),j=a(21),b=a(3),g=a.n(b),f=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e.handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(j.a)({},r,n))},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.handleSearch)(e.state.text),e.setState({text:""})},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:g.a.Searchbar,children:Object(n.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:g.a.SearchFormButton,children:Object(n.jsx)("span",{className:g.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:g.a.SearchFormInput,name:"text",type:"search",autoComplete:"off",autoFocus:!0,value:this.state.text,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(r.Component);function _(e){var t=e.item;return console.log(t),Object(n.jsx)("li",{className:g.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:t.webformatURL,alt:"",className:g.a.ImageGalleryItemImage,"data-source":t.largeImageURL})},t.id)}function O(e){var t=e.data;return Object(n.jsx)("ul",{className:g.a.ImageGallery,children:t.map((function(e){return Object(n.jsx)(_,{item:e},e.id)}))})}a(45);var x=a(22),S=a.n(x),y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)(S.a,{type:"Puff",color:"#00BFFF",height:100,width:100})}}]),a}(c.a.Component);function v(e){var t=e.text,a=e.fetchPosts;return Object(n.jsx)("div",{className:g.a.containerButton,children:Object(n.jsx)("button",{className:g.a.Button,onClick:a,children:t})})}v.defaultProps={text:"ShowMore..."};var I=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[],page:1,search:"",loading:!1,errors:""},e.KEY="18953015-07ab6e07958b18192a80798da",e.fetchPosts=function(){e.setState({loading:!0}),d.a.get("https://pixabay.com/api/?q=".concat(e.state.search,"&page=").concat(e.state.page,"&key=").concat(e.KEY,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){e.setState({data:t.data.hits}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({errors:t})})).finally((function(){return e.setState({loading:!1})})),e.setState((function(t){return{nextPage:Boolean(e.state.data.next),page:t.page+1,data:[].concat(Object(l.a)(t.data),Object(l.a)(e.state.data))}}))},e.handleSearch=function(t){e.setState({data:[],search:t,page:1,nextPage:!0})},e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.search!==this.state.search&&this.fetchPosts()}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.loading,r=e.errors;e.nextPage;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f,{handleSearch:this.handleSearch}),a&&Object(n.jsx)(y,{}),r&&Object(n.jsx)("p",{children:r.message}),!t.length&&!a&&Object(n.jsx)("p",{children:"Try more"}),Object(n.jsx)(O,{data:t}),!!t.length&&Object(n.jsx)(v,{fetchPosts:this.fetchPosts})]})}}]),a}(r.Component);s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.12c5fee1.chunk.js.map
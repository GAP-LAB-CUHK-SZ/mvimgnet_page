var myChart = echarts.init(document.getElementById('tox_mvi'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            toolbox: {
            　　show: true,
            　　feature: {
            　　　　saveAsImage: {
            　　　　show:true,
            　　　　excludeComponents :['toolbox'],
            　　　　pixelRatio: 5
            　　　　}
            　　}
            },
            series: [
                
                {
                    name: '',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: ['0%', '10%'],
                    label: {
                        normal: {
                        position: 'center',
                        show: true,
                        // color: '#FFF',
                        textStyle: {"fontSize": 10 ,
                           fontWeight:'bold',
                        },
                        
                        },
                    },
                    itemStyle:{
                        borderWidth:0, //设置border宽度
                        // borderColor:'#fff',
                    },
                    labelLine: {
                        show: false,
                    },
                    color : ['#ccc5b9'],
                    data: [
                        {value: 1, name: 'MVImgNet'},
                    ]
                },

                {
                    name: '',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: ['10%', '22%'],
                    label: {
                        normal: {
                        position: 'inner',
                        distance:0,
                        show: true,
                        textStyle: {"fontSize": 7,
                        fontWeight:'bold',
                        },
                        },
                    },
                    itemStyle:{
                        borderWidth:0, //设置border宽度
                        borderColor:'#fff',
                    },
                    labelLine: {
                        show: false
                    },
                    color: ['#7f5539', '#005f73', '#023e7d','#205555'],

                        
                    data: [
                        {value: 0.750214, name: 'Artifact', label:{normal:{rotate:-45.03867815302499}}},
                        {value: 0.238920, name: 'Food', label:{normal:{rotate:-43.609529229380485}}},
                        {value: 0.010866, name: 'Flower', label:{normal:{rotate:-88.5708510763555}}},
                    ]
                },
                {
                    name: '',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: ['22%', '39%'],
                    label: {
                        normal: {
                        position: 'inner',
                        distance:0,
                        show: true,
                        textStyle: {"fontSize": 7,
                        fontWeight:'bold',
                        },
                        },
                    },
                    itemStyle:{
                        borderWidth:0.5, //设置border宽度
                        borderColor:'#fff',
                    },
                    labelLine: {
                        show: false
                    },
                    color: ['#0a9396', '#94d2bd', '#FFF',"#cb997e",'#ddbea9', '#cb997e', '#ddbea9',"#cb997e",'#ddbea9', '#94d2bd', '#0a9396', '#94d2bd'],
                    data: [
                        {value: 31738, name: 'Toy', label:{normal:{rotate:67.57868090033165}}},
                        {value: 11109, name: 'Clothing', label:{normal:{rotate:37.30940560058086}}},
                        {value: 9159, name: 'Decoration', label:{normal:{rotate:22.991071253360545}}},
                        {value: 5099, name: 'Fabric', label:{normal:{rotate:12.918503110343611}}},
                        {value: 111870, name: 'Instrumentality', label:{normal:{rotate:-69.71428010753742}}},
                        {value: 22176, name: 'Other', label:{normal:{rotate:15.588885182205331}}},
                        {value: 22638, name: 'Vegetable', label:{normal:{rotate:-16.06997782531053}}},
                        {value: 21482, name: 'Fruit', label:{normal:{rotate:-47.23856433603484}}},
                        {value: 11194, name: 'Delicatessen', label:{normal:{rotate:-70.3225338016837}}},
                        {value: 3212, name: 'Fresh', label:{normal:{rotate:-80.4996565866677}}},
                        {value: 3095, name: 'Snacks', label:{normal:{rotate:-84.95523852508882}}},
                        {value: 2023, name: ' ', label:{normal:{rotate:-88.5708510763555}}},
                    ]
                },

                {
                    name: '',
                    type: 'pie',
                    radius: ['40%', '58%'],
                    label: {
                        normal: {
                        position: 'outer',
                        show: true,
                        textStyle: {"fontSize": 6 ,fontWeight:'bold',},
                        },
                    },
                    labelLine:{
                        show:true,

                    },
                    itemStyle:{
                        borderWidth:0,
                        borderColor:'#fff',
                    },
                    
                    color: ['#118ab2','#FFF','#e6ccb2', '#ddb892', '#e6ccb2', '#e07a5f', '#9e2a2b', '#e07a5f', '#9e2a2b', '#e07a5f','#9e2a2b', '#e07a5f', '#7d4f50', '#d88c9a', '#7d4f50', '#d88c9a', '#7d4f50', '#d88c9a', '#9e2a2b', '#e07a5f','#9e2a2b', '#e07a5f', '#9e2a2b', '#7f5539', '#ddb892', '#7f5539', '#ddb892', '#7f5539', '#ddb892', '#7f5539', '#ddb892', '#d88c9a', '#7d4f50', '#d88c9a', '#7d4f50', '#d88c9a', '#7d4f50', '#d88c9a', '#7d4f50', '#d88c9a', '#7d4f50', '#d88c9a', '#7d4f50', '#d88c9a', '#7d4f50', '#d88c9a', '#7d4f50', '#d88c9a', '#7d4f50', '#d88c9a', '#7d4f50', '#d88c9a', '#335c67', '#fff3b0', '#335c67', '#fff3b0', '#335c67', '#fff3b0', '#335c67', '#fff3b0', '#335c67', '#fff3b0', '#335c67', '#fff3b0', '#335c67', '#fff3b0', '#335c67', '#fff3b0', '#335c67', '#fff3b0', '#335c67', '#fff3b0', '#335c67', '#fff3b0', '#335c67', '#00afb9', '#ffd6ba', '#00afb9', '#ffd6ba', '#00afb9', '#ffd6ba', '#00afb9', '#ffd6ba', '#00afb9', '#ffd6ba', '#00afb9', '#ffd6ba', '#00afb9', '#ffd6ba', '#00afb9', '#ffd6ba', '#00afb9', '#ffd6ba', '#00afb9', '#ffd6ba', '#00afb9', '#ffd6ba', '#00afb9', '#335c67', '#fff3b0', '#335c67', '#fff3b0', '#335c67', '#fff3b0', '#335c67', '#fff3b0', '#335c67', '#05668d', '#00a896', '#05668d', '#48bfe3'],
                    
                    data: [
                        {value: 21258, name: 'Doll', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:74.98227987205401, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 10480, name: 'Model', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:52.56096077238564, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 680, name: 'Cap', label:{normal:{rotate:44.6769756078416}}},
                        {value: 1058, name: 'Scarf', label:{normal:{rotate:43.44916501501207}}},
                        {value: 2000, name: 'Shoe', label:{normal:{rotate:41.288840047881635}}},
                        {value: 2000, name: 'Skirt', label:{normal:{rotate:38.46303891363646}}},
                        {value: 2282, name: 'Pants', label:{normal:{rotate:35.438018799427}}},
                        {value: 2000, name: 'Clothing', label:{normal:{rotate:32.41299868521754}}},
                        {value: 1089, name: 'Glove', label:{normal:{rotate:30.2307737592967}}},
                        {value: 2000, name: 'Lipstick', label:{normal:{rotate:28.048548833375865}}},
                        {value: 2000, name: 'Rockery', label:{normal:{rotate:25.222747699130686}}},
                        {value: 2000, name: 'Root carving', label:{normal:{rotate:22.396946564885507}}},
                        {value: 1029, name: 'Lantern', label:{normal:{rotate:20.257108655978342}}},
                        {value: 1063, name: 'Accessory', label:{normal:{rotate:18.779214662768116}}},
                        {value: 1067, name: 'Watch', label:{normal:{rotate:17.274475558782562}}},
                        {value: 1099, name: 'Pillow', label:{normal:{rotate:15.744304244588797}}},
                        {value: 1000, name: 'Towel', label:{normal:{rotate:14.26146509939364}}},
                        {value: 1000, name: 'Sanitary napkin', label:{normal:{rotate:12.84856453227105}}},
                        {value: 1000, name: 'Toilet paper', label:{normal:{rotate:11.43566396514846}}},
                        {value: 1000, name: 'Quilt', label:{normal:{rotate:10.022763398025871}}},
                        {value: 16399, name: 'Furniture', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:-2.2687650856570922, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 7525, name: 'Kitchen Ware', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:-19.1698816695775, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 22192, name: 'Container', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:-40.163464746168486, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 13955, name: 'Device', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:-65.6995231460586, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 20674, name: 'Tool and Hardware', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:89.83680998449734, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 13452, name: 'Home Appliance', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:65.7284876076846, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 3008, name: 'Vehicle', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:54.1003159402657, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 14665, name: 'Entertainment', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:41.61522007888692, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 2000, name: 'Helmet', label:{normal:{rotate:29.842226103337964}}},
                        {value: 237, name: 'Bench', label:{normal:{rotate:28.261896819011355}}},
                        {value: 1559, name: 'Candle', label:{normal:{rotate:26.99311210973525}}},
                        {value: 1029, name: 'Bath sponge', label:{normal:{rotate:25.164818775878615}}},
                        {value: 1067, name: 'Lighter', label:{normal:{rotate:23.684098981534135}}},
                        {value: 1052, name: 'Key', label:{normal:{rotate:22.18713083066774}}},
                        {value: 1059, name: 'Toothpaste', label:{normal:{rotate:20.695814282069875}}},
                        {value: 1084, name: 'Swin ring', label:{normal:{rotate:19.18189132439801}}},
                        {value: 1050, name: 'Telescope', label:{normal:{rotate:17.674326419278174}}},
                        {value: 1063, name: 'Ashtray', label:{normal:{rotate:16.181596970113162}}},
                        {value: 1000, name: 'Extinguisher', label:{normal:{rotate:14.724190035126242}}},
                        {value: 1000, name: 'Hand Warmer', label:{normal:{rotate:13.31128946800365}}},
                        {value: 1027, name: 'Bell', label:{normal:{rotate:11.879314743224882}}},
                        {value: 1038, name: 'Calendar', label:{normal:{rotate:10.420494907670815}}},
                        {value: 1000, name: 'Electronic mosquito swatter', label:{normal:{rotate:8.980749229772925}}},
                        {value: 1000, name: 'Electronic mosquito killer', label:{normal:{rotate:7.567848662650334}}},
                        {value: 1027, name: 'Insecticide', label:{normal:{rotate:6.135873937871565}}},
                        {value: 1034, name: 'Inflator', label:{normal:{rotate:4.679879903451763}}},
                        {value: 761, name: 'Blackboard eraser', label:{normal:{rotate:3.4118016444592456}}},
                        {value: 1047, name: 'Stapler', label:{normal:{rotate:2.134539531780433}}},
                        {value: 1042, name: 'Cigarette', label:{normal:{rotate:0.6587648894208655}}},
                        {value: 1112, name: 'Ginger', label:{normal:{rotate:-0.8629290213701779}}},
                        {value: 974, name: 'Cauliflower', label:{normal:{rotate:-2.336584312879012}}},
                        {value: 1027, name: 'Broccoli', label:{normal:{rotate:-3.7501913302851904}}},
                        {value: 1090, name: 'Cabbage', label:{normal:{rotate:-5.245746580584438}}},
                        {value: 978, name: 'Eggplant', label:{normal:{rotate:-6.70668576698921}}},
                        {value: 977, name: 'Pumpkin', label:{normal:{rotate:-8.087796071351534}}},
                        {value: 1100, name: 'winter melon', label:{normal:{rotate:-9.555093310308337}}},
                        {value: 1205, name: 'Tomato', label:{normal:{rotate:-11.183461213917099}}},
                        {value: 880, name: 'Corn', label:{normal:{rotate:-12.656410055142402}}},
                        {value: 769, name: 'Sunflower', label:{normal:{rotate:-13.821346572734967}}},
                        {value: 899, name: 'Potato', label:{normal:{rotate:-14.999705645715181}}},
                        {value: 793, name: 'Sweet potato', label:{normal:{rotate:-16.195019525500896}}},
                        {value: 1035, name: 'Chinese cabbage', label:{normal:{rotate:-17.486410643850917}}},
                        {value: 952, name: 'Onion', label:{normal:{rotate:-18.89012735728724}}},
                        {value: 877, name: 'Momordica charantia', label:{normal:{rotate:-20.18222492592082}}},
                        {value: 739, name: 'Chili', label:{normal:{rotate:-21.323848584155883}}},
                        {value: 914, name: 'Cucumber', label:{normal:{rotate:-22.491610902882684}}},
                        {value: 1069, name: 'Chestnut', label:{normal:{rotate:-23.892501815184744}}},
                        {value: 1077, name: 'Okra', label:{normal:{rotate:-25.408544123707287}}},
                        {value: 1020, name: 'Lotus root', label:{normal:{rotate:-26.889970368335298}}},
                        {value: 1035, name: 'Taro', label:{normal:{rotate:-28.341725701053747}}},
                        {value: 1048, name: 'Garlic', label:{normal:{rotate:-29.813261641711932}}},
                        {value: 1068, name: 'Sugarcane', label:{normal:{rotate:-31.30811044172765}}},
                        {value: 1061, name: 'Grapefruit', label:{normal:{rotate:-32.81214309542963}}},
                        {value: 857, name: 'Jackfruit', label:{normal:{rotate:-34.16711473930022}}},
                        {value: 775, name: 'Star fruit', label:{normal:{rotate:-35.32004160207225}}},
                        {value: 760, name: 'Avocado', label:{normal:{rotate:-36.40444278733884}}},
                        {value: 811, name: 'Shakyamuni', label:{normal:{rotate:-37.51427618281363}}},
                        {value: 752, name: 'Coconut', label:{normal:{rotate:-38.618457976019926}}},
                        {value: 1036, name: 'Pineapple', label:{normal:{rotate:-39.88159108302753}}},
                        {value: 978, name: 'Kiwi', label:{normal:{rotate:-41.304381954120004}}},
                        {value: 812, name: 'Pomegranate', label:{normal:{rotate:-42.5689279616947}}},
                        {value: 1062, name: 'Pawpaw', label:{normal:{rotate:-43.89281579308857}}},
                        {value: 998, name: 'Watermelon', label:{normal:{rotate:-45.34810337722482}}},
                        {value: 822, name: 'Apple', label:{normal:{rotate:-46.633842893306394}}},
                        {value: 836, name: 'Banana', label:{normal:{rotate:-47.80513746345102}}},
                        {value: 891, name: 'Pear', label:{normal:{rotate:-49.02517710316138}}},
                        {value: 1085, name: 'Cantaloupe', label:{normal:{rotate:-50.42112286347847}}},
                        {value: 756, name: 'Durian', label:{normal:{rotate:-51.721697835514846}}},
                        {value: 804, name: 'Persimmon', label:{normal:{rotate:-52.823760277870434}}},
                        {value: 954, name: 'Grape', label:{normal:{rotate:-54.06569987637121}}},
                        {value: 1014, name: 'Peach', label:{normal:{rotate:-55.45599403441983}}},
                        {value: 1095, name: 'Guava', label:{normal:{rotate:-56.94589768245058}}},
                        {value: 1215, name: 'Tangerine', label:{normal:{rotate:-58.57779783747716}}},
                        {value: 1059, name: 'Lemon', label:{normal:{rotate:-60.18426578229554}}},
                        {value: 1049, name: 'Mango', label:{normal:{rotate:-61.67346298004276}}},
                        {value: 1039, name: 'Cookie', label:{normal:{rotate:-63.148531172118766}}},
                        {value: 1019, name: 'Fries', label:{normal:{rotate:-64.60240585568789}}},
                        {value: 1042, name: 'Donut', label:{normal:{rotate:-66.05839989010772}}},
                        {value: 2000, name: 'Chinese hot dishes', label:{normal:{rotate:-68.20742165270119}}},
                        {value: 1500, name: 'Roast Duck', label:{normal:{rotate:-70.67999764516571}}},
                        {value: 1516, name: 'Pizza', label:{normal:{rotate:-72.81065170038656}}},
                        {value: 1009, name: 'Bread', label:{normal:{rotate:-74.59443866637884}}},
                        {value: 1011, name: 'Bun', label:{normal:{rotate:-76.02146823917263}}},
                        {value: 1058, name: 'Sausage', label:{normal:{rotate:-77.48311387586097}}},
                        {value: 1043, name: 'Eggs', label:{normal:{rotate:-78.96736592162324}}},
                        {value: 1091, name: 'Conch', label:{normal:{rotate:-80.47493082674305}}},
                        {value: 1078, name: 'Seafood', label:{normal:{rotate:-82.0072214917875}}},
                        {value: 2069, name: 'Bagged snacks', label:{normal:{rotate:-84.23042053415492}}},
                        {value: 1026, name: 'Ice cream', label:{normal:{rotate:-86.41688416177715}}},
                        {value: 2023, name: ' ', label:{normal:{rotate:-88.57085107635555}}},
                    ]
                },
                {
                    name: '',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: ['63%', '88%'],
                    label: {
                        normal: {
                        position: 'outer',
                        show: true,
                        textStyle: {fontSize: 8, fontWeight:'bold' },
                        padding:[0,0],
                        },
                    },
                    itemStyle:{
                        borderWidth:0, //设置border宽度
                        borderColor:'#fff',
                    },
                    labelLine: {
                        show: true,
                        length:1,//第一段线长
                        length2:0 //第二段线长
                    },
                    color: ['#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#ef476f', '#fff1e6', '#ef476f', '#fff1e6', '#ef476f', '#fff1e6', '#ef476f', '#ca6702', '#fff1e6', '#fff1e6', '#ca6702', '#fff1e6', '#ca6702', '#fff1e6', '#ca6702', '#fff1e6', '#ca6702', '#fff1e6', '#ca6702', '#fff1e6', '#ca6702', '#fff1e6', '#ca6702', '#fff1e6', '#ca6702', '#fff1e6', '#ca6702', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#b56576', '#fff1e6', '#b56576', '#b56576', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#6d597a', '#355070', '#fff1e6', '#fff1e6', '#355070', '#355070', '#fff1e6', '#355070', '#fff1e6', '#355070', '#fff1e6', '#355070', '#fff1e6', '#355070', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#6d597a', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#fff1e6', '#b56576', '#e56b6f', '#eed7c5', '#fff1e6', '#e56b6f', '#fff1e6', '#eaac8b', '#fff1e6', '#eaac8b', '#fff1e6', '#eaac8b', '#fff1e6', '#eaac8b', '#fff1e6', '#eaac8b', '#fff1e6', '#eaac8b', '#fff1e6', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#fff1e6',],

                    data: [
                        {value: 2000, name: 'Plush toy', label:{normal:{rotate:88.58709943287741}}},
                        {value: 2030, name: 'Toy figure', label:{normal:{rotate:85.74010479012539}}},
                        {value: 724, name: 'Toy bear', label:{normal:{rotate:83.79454070919759}}},
                        {value: 768, name: 'Toy cat', label:{normal:{rotate:82.74051688612414}}},
                        {value: 824, name: 'Toy bird', label:{normal:{rotate:81.61584803469457}}},
                        {value: 755, name: 'Toy insect', label:{normal:{rotate:80.50036303695128}}},
                        {value: 778, name: 'Toy cow', label:{normal:{rotate:79.41737475225182}}},
                        {value: 816, name: 'Toy dog', label:{normal:{rotate:78.29129300025512}}},
                        {value: 819, name: 'Toy monkey', label:{normal:{rotate:77.13624678663241}}},
                        {value: 783, name: 'Toy elephant', label:{normal:{rotate:76.0045134323672}}},
                        {value: 759, name: 'Toy fish', label:{normal:{rotate:74.91516709511569}}},
                        {value: 791, name: 'Toy horse', label:{normal:{rotate:73.82016915559569}}},
                        {value: 840, name: 'Toy sheep', label:{normal:{rotate:72.66794874310722}}},
                        {value: 716, name: 'Toy mouse', label:{normal:{rotate:71.56871210188584}}},
                        {value: 777, name: 'Toy tiger', label:{normal:{rotate:70.51398182852883}}},
                        {value: 790, name: 'Toy rabbit', label:{normal:{rotate:69.40697423418828}}},
                        {value: 512, name: 'Toy dragon', label:{normal:{rotate:68.4871759649915}}},
                        {value: 797, name: 'Toy snake', label:{normal:{rotate:67.56243254380975}}},
                        {value: 707, name: 'Toy chook', label:{normal:{rotate:66.49993131733356}}},
                        {value: 687, name: 'Toy pig', label:{normal:{rotate:65.51513962204912}}},
                        {value: 1030, name: 'Toy butterfly ', label:{normal:{rotate:64.30216448517437}}},
                        {value: 1457, name: 'Toy duck', label:{normal:{rotate:62.545222629957436}}},
                        {value: 1098, name: 'Toy turtle', label:{normal:{rotate:60.74024215545833}}},
                        {value: 2000, name: 'Vessel', label:{normal:{rotate:58.55165917698544}}},
                        {value: 2029, name: 'Train', label:{normal:{rotate:55.70537098451699}}},
                        {value: 1000, name: 'Rifle', label:{normal:{rotate:53.56553307560983}}},
                        {value: 1500, name: 'Motorcycle', label:{normal:{rotate:51.79940736670659}}},
                        {value: 1000, name: 'Pistol', label:{normal:{rotate:50.03328165780336}}},
                        {value: 1415, name: 'Car', label:{normal:{rotate:48.32720422300283}}},
                        {value: 1536, name: 'Airplane', label:{normal:{rotate:46.242469436213455}}},
                        {value: 11109, name: ' ', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:37.30940560058088, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 9159, name: ' ', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:22.991071253360566, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 5099, name: ' ', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:12.918503110343632, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 1500, name: 'Table', label:{normal:{rotate:8.256637689122652}}},
                        {value: 2000, name: 'Sofa', label:{normal:{rotate:5.784061696658122}}},
                        {value: 1, name: 'Mailbox', label:{normal:{rotate:4.370454679251972}}},
                        {value: 516, name: 'Bookshelf', label:{normal:{rotate:4.005219882650783}}},
                        {value: 1048, name: 'Faucet', label:{normal:{rotate:2.9003316391609184}}},
                        {value: 1500, name: 'Chair', label:{normal:{rotate:1.1002963166467405}}},
                        {value: 223, name: 'Caninet', label:{normal:{rotate:-0.11691752192936969}}},
                        {value: 100, name: 'Bed', label:{normal:{rotate:-0.3451009635196678}}},
                        {value: 238, name: 'Bathtub', label:{normal:{rotate:-0.5838811593633852}}},
                        {value: 1013, name: 'Ashcan', label:{normal:{rotate:-1.4676504640985644}}},
                        {value: 117, name: 'Coat rack', label:{normal:{rotate:-2.265939284522827}}},
                        {value: 2000, name: 'Ceiling lamp', label:{normal:{rotate:-3.761494534822087}}},
                        {value: 815, name: 'Wall lamp', label:{normal:{rotate:-5.75015208304713}}},
                        {value: 1055, name: 'Light switch', label:{normal:{rotate:-7.071214113306751}}},
                        {value: 1059, name: 'Shower', label:{normal:{rotate:-8.564650012755328}}},
                        {value: 134, name: 'Toilet', label:{normal:{rotate:-9.407445201043952}}},
                        {value: 78, name: 'Sink', label:{normal:{rotate:-9.557212661158946}}},
                        {value: 1002, name: 'Power socket', label:{normal:{rotate:-10.320178967405143}}},
                        {value: 1000, name: 'Scales', label:{normal:{rotate:-11.734492435094854}}},
                        {value: 1000, name: 'End table', label:{normal:{rotate:-13.147393002217443}}},
                        {value: 3500, name: 'Stove', label:{normal:{ textStyle: {fontWeight:'bold'}, rotate:-16.326419278243268}}, labelLine:{normal:{show: false }}},
                        {value: 120, name: 'Microwave', label:{normal:{rotate:-18.883769304735154}}},
                        {value: 16, name: 'Dishwasher', label:{normal:{rotate:-18.979846543299487}}},
                        {value: 1000, name: 'Rice cooker', label:{normal:{rotate:-19.697600031397766}}},
                        {value: 1000, name: 'Pressure cooker', label:{normal:{rotate:-21.110500598520353}}},
                        {value: 388, name: 'Toaster', label:{normal:{rotate:-22.091053592103428}}},
                        {value: 500, name: 'Chopsticks', label:{normal:{rotate:-22.71838144390586}}},
                        {value: 1, name: 'Spoon', label:{normal:{rotate:-23.07231303597007}}},
                        {value: 1000, name: 'Stirrer', label:{normal:{rotate:-23.779469769814924}}},
                        {value: 2000, name: 'Bag', label:{normal:{rotate:-25.898820620498803}}},
                        {value: 2059, name: 'Bottle', label:{normal:{rotate:-28.7663023214741}}},
                        {value: 2013, name: 'Flowerpot', label:{normal:{rotate:-31.642967876135693}}},
                        {value: 1500, name: 'Mug', label:{normal:{rotate:-34.12472772228652}}},
                        {value: 3000, name: 'Pot', label:{normal:{ textStyle: {fontWeight:'bold'}, rotate:-37.303753998312345}}, labelLine:{normal:{show: false }}},
                        {value: 1545, name: 'Can', label:{normal:{rotate:-40.51457053709842}}},
                        {value: 2050, name: 'Bowl', label:{normal:{rotate:-43.05425930650128}}},
                        {value: 2000, name: 'Basket', label:{normal:{rotate:-45.915382954924524}}},
                        {value: 1000, name: 'Bucket', label:{normal:{rotate:-48.034733805608404}}},
                        {value: 1029, name: 'Jug', label:{normal:{rotate:-49.46812143095427}}},
                        {value: 2000, name: 'Paper box', label:{normal:{rotate:-51.60795933986144}}},
                        {value: 996, name: 'Box', label:{normal:{rotate:-53.724484389411074}}},
                        {value: 1000, name: 'Luggage case', label:{normal:{rotate:-55.134559155399415}}},
                        {value: 1511, name: 'Telephone', label:{normal:{rotate:-56.908455817421824}}},
                        {value: 2, name: 'Printer', label:{normal:{rotate:-57.97731509645007}}},
                        {value: 1000, name: 'Microphone', label:{normal:{rotate:-58.685178280578484}}},
                        {value: 1500, name: 'Loudspeaker', label:{normal:{rotate:-60.45130398948172}}},
                        {value: 1000, name: 'Laptop', label:{normal:{rotate:-62.21742969838496}}},
                        {value: 1500, name: 'Earphone', label:{normal:{rotate:-63.9835554072882}}},
                        {value: 1000, name: 'Display', label:{normal:{rotate:-65.74968111619144}}},
                        {value: 1000, name: 'Computer keyboard', label:{normal:{rotate:-67.16258168331403}}},
                        {value: 1500, name: 'Camera', label:{normal:{rotate:-68.92870739221726}}},
                        {value: 1062, name: 'Cassette', label:{normal:{rotate:-70.73863301870131}}},
                        {value: 880, name: 'Computer mouse', label:{normal:{rotate:-72.11055946937734}}},
                        {value: 1000, name: 'Tripod', label:{normal:{rotate:-73.43868600247258}}},
                        {value: 1000, name: 'Selfie stick', label:{normal:{rotate:-74.85158656959517}}},
                        {value: 1019, name: 'Can opener', label:{normal:{rotate:-76.27790969210542}}},
                        {value: 1500, name: 'Hammer', label:{normal:{rotate:-78.05745795639632}}},
                        {value: 1528, name: 'Screw driver', label:{normal:{rotate:-80.19658941501993}}},
                        {value: 847, name: 'Ladder', label:{normal:{rotate:-81.874408838478}}},
                        {value: 1044, name: 'Pipe PVC Metal pipe', label:{normal:{rotate:-83.21030632469241}}},
                        {value: 1000, name: 'Axe', label:{normal:{rotate:-84.6542907042917}}},
                        {value: 1071, name: 'Shovel', label:{normal:{rotate:-86.11734924154713}}},
                        {value: 1007, name: 'Besom', label:{normal:{rotate:-87.58535293078751}}},
                        {value: 1000, name: 'Mop', label:{normal:{rotate:-89.00319864989503}}},
                        {value: 1000, name: 'Lock', label:{normal:{rotate:89.58390078298238}}},
                        {value: 1000, name: 'Doorknob', label:{normal:{rotate:88.17100021585979}}},
                        {value: 1001, name: 'Hairbrush', label:{normal:{rotate:86.75739319845364}}},
                        {value: 1058, name: 'Razor', label:{normal:{rotate:85.30281206460094}}},
                        {value: 1029, name: 'Adhesive hook', label:{normal:{rotate:83.82845032280851}}},
                        {value: 1000, name: 'Thermometer', label:{normal:{rotate:82.39506269746265}}},
                        {value: 1100, name: 'Adapter(Water pipe)', label:{normal:{rotate:80.91151710198393}}},
                        {value: 1420, name: 'Electric saw', label:{normal:{rotate:79.13126238740948}}},
                        {value: 1000, name: 'Electric drill', label:{normal:{rotate:77.42165270119114}}},
                        {value: 1050, name: 'Ironmongery', label:{normal:{rotate:75.97342961989048}}},
                        {value: 42, name: 'Wahser', label:{normal:{rotate:75.20198591024155}}},
                        {value: 2000, name: 'Lamp', label:{normal:{rotate:73.75941443120938}}},
                        {value: 1500, name: 'Clock', label:{normal:{rotate:71.28683843874485}}},
                        {value: 1000, name: 'Umbrella', label:{normal:{rotate:69.5207127298416}}},
                        {value: 4, name: 'Dryer', label:{normal:{rotate:68.81143664514606}}},
                        {value: 1500, name: 'Fan', label:{normal:{rotate:67.74893541866989}}},
                        {value: 1036, name: 'Flashlight', label:{normal:{rotate:65.95737749955843}}},
                        {value: 1000, name: 'Hair dryer', label:{normal:{rotate:64.51904472222763}}},
                        {value: 319, name: 'Projector', label:{normal:{rotate:63.587236798210284}}},
                        {value: 25, name: 'Cabinet Air Conditioner', label:{normal:{rotate:63.3442179006652}}},
                        {value: 20, name: 'Desk Air Conditioner', label:{normal:{rotate:63.312427637904946}}},
                        {value: 32, name: 'Refrigerator', label:{normal:{rotate:63.27569222315975}}},
                        {value: 946, name: 'Power strip', label:{normal:{rotate:62.58478384583681}}},
                        {value: 1000, name: 'Cleaner', label:{normal:{rotate:61.21003159402653}}},
                        {value: 1000, name: 'Heating radiator', label:{normal:{rotate:59.79713102690394}}},
                        {value: 1000, name: 'Humidifier', label:{normal:{rotate:58.38423045978135}}},
                        {value: 1028, name: 'Bulb', label:{normal:{rotate:56.95154928471905}}},
                        {value: 7, name: 'Bus', label:{normal:{rotate:56.220373241233105}}},
                        {value: 1000, name: 'Bicycle', label:{normal:{rotate:55.50897780568688}}},
                        {value: 1, name: 'Wheelchair', label:{normal:{rotate:54.80182107184203}}},
                        {value: 1000, name: 'Walking stick', label:{normal:{rotate:54.09466433799717}}},
                        {value: 1000, name: 'Tricycle', label:{normal:{rotate:52.68176377087458}}},
                        {value: 11, name: 'Piano', label:{normal:{rotate:51.96754253419411}}},
                        {value: 1000, name: 'Guitar', label:{normal:{rotate:51.25332129751365}}},
                        {value: 750, name: 'Easel', label:{normal:{rotate:50.01703330128137}}},
                        {value: 664, name: 'Guitar stand', label:{normal:{rotate:49.01811260032571}}},
                        {value: 1628, name: 'Book', label:{normal:{rotate:47.39892855040321}}},
                        {value: 1000, name: 'Percussion', label:{normal:{rotate:45.54237720520416}}},
                        {value: 2000, name: 'Strings', label:{normal:{rotate:43.42302635452026}}},
                        {value: 2000, name: 'Wind instruments', label:{normal:{rotate:40.59722522027508}}},
                        {value: 2000, name: 'Balloons', label:{normal:{rotate:37.771424086029896}}},
                        {value: 1536, name: 'Soccer', label:{normal:{rotate:35.27341588335716}}},
                        {value: 1060, name: 'Racket', label:{normal:{rotate:33.43947094723205}}},
                        {value: 1016, name: 'Badminton', label:{normal:{rotate:31.97288015855878}}},
                        {value: 22176, name: ' ', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:15.588885182205246, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 22638, name: ' ', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:-16.069977825310616, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 21482, name: ' ', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:-47.238564336034926, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 11194, name: ' ', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:-70.32253380168379, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 3212, name: ' ', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:-80.49965658666781, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 3095, name: ' ', label:{normal:{ textStyle: {'fontSize': 7,fontWeight:'bold'}, rotate:-84.95523852508893, position: 'inner' }}, labelLine:{normal:{show: false }}},
                        {value: 2023, name: ' ', label:{normal:{rotate:-88.57085107635561}}},
                    ]
                },

            ]
        };
        
        
myChart.setOption(option);
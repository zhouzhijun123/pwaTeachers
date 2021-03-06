import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Grid extends Vue {
    // modify the width about grid cell
    @Prop({ default: '' }) private width!: string;
    // the img in grid cell
    @Prop({ default: [{}] }) private imgs!: object[];
}

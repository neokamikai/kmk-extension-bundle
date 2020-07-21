import md5Node from "../../helpers/transform/md5-node"

String.prototype.md5 = function () {
    return md5Node(this.toString());
}
export { };
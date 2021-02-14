"use strict";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let currNode = this.root;
    let newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
    } else {
      while (true) {
        if (data < currNode.data) {
          if (currNode.left) {
            currNode = currNode.left;
          } else {
            currNode.left = newNode;
            break;
          }
        } else {
          if (currNode.right) {
            currNode = currNode.right;
          } else {
            currNode.right = newNode;
            break;
          }
        }
      }
    }
  }

  search(data) {
    let currNode = this.root;

    while (currNode) {
      if (data < currNode.data) {
        currNode = currNode.left;
      } else if (data > currNode.data) {
        currNode = currNode.right;
      } else {
        console.log(`find ${currNode.data}!!`);
        return true;
      }
    }

    console.log(`couldn't find the ${data}`);
    return false;
  }

  delete(data) {
    let currNode = this.root;
    let targetNode;
    let chaser;
    if (!this.search(data)) return false;

    while (true) {
      if (data < currNode.data) {
        chaser = currNode;
        currNode = currNode.left;
      } else if (data > currNode.data) {
        chaser = currNode;
        currNode = currNode.right;
      } else {
        targetNode = currNode;
        break;
      }
    }

    if (!(targetNode.left || targetNode.right)) {
      chaser.left = chaser.left === targetNode ? null : chaser.left;
      chaser.right = chaser.right === targetNode ? null : chaser.right;
    } else if (targetNode.left && targetNode.right) {
      let replaceNode = currNode.right;
      let replaceNodeChaser = currNode;

      while (replaceNode.left) {
        replaceNodeChaser = replaceNode;
        replaceNode = replaceNode.left;
      }

      if (replaceNodeChaser === currNode) {
        replaceNodeChaser.right = replaceNode.right;
      } else {
        replaceNodeChaser.left = replaceNode.right;
      }

      if (data < chaser.data) {
        chaser.left.data = replaceNode.data;
      } else {
        chaser.right.data = replaceNode.data;
      }
    } else {
      chaser.left =
        chaser.left === targetNode
          ? targetNode.left
            ? targetNode.left
            : targetNode.right
          : chaser.left;
      chaser.right =
        chaser.right === targetNode
          ? targetNode.left
            ? targetNode.left
            : targetNode.right
          : chaser.right;
    }

    console.log(`${data} is deleted`);
    // 1. leaf node, 2. single branch node, 3. dual branch node
    // 삭제할 노드의 오른쪽 자식 중 가장 작은 값 선택
    // 삭제 후 가장 작은 값과 교체
    // 해당 노드가 자식이 있는 지 여부(왼쪽은 무조건 없긴 함)
  }

  print(node) {
    console.log(node.data);
    if (node.left) {
      this.print(node.left);
    }
    if (node.right) {
      this.print(node.right);
    }

    return;
  }
}

const tree = new Tree();
tree.insert(3);
tree.insert(5);
tree.insert(4);
tree.insert(6);
tree.insert(7);
tree.delete(5);
tree.search(5);
tree.search(6);
tree.search(7);
tree.print(tree.root);

import random


class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class NodeMgmt:
    def __init__(self, head):
        self.head = head

    def insert(self, value):
        self.currentNode = self.head
        while True:
            if value < self.currentNode.value:
                if self.currentNode.left != None:
                    self.currentNode = self.currentNode.left
                else:
                    self.currentNode.left = Node(value)
                    break
            else:
                if self.currentNode.right != None:
                    self.currentNode = self.currentNode.right
                else:
                    self.currentNode.right = Node(value)
                    break

    def search(self, value):
        self.currentNode = self.head

        while self.currentNode:
            if value == self.currentNode.value:
                return True
            elif value < self.currentNode.value:
                self.currentNode = self.currentNode.left
            else:
                self.currentNode = self.currentNode.right
        return False

    def delete(self, value):
        self.currentNode = self.head

        while self.currentNode:
            if value < self.currentNode.value:
                self.taliNode = self.currentNode
                self.currentNode = self.currentNode.left
            elif value > self.currentNode.value:
                self.taliNode = self.currentNode
                self.currentNode = self.currentNode.right
            else:
                if self.currentNode.right == None and self.currentNode.left == None:
                    if self.taliNode.right == self.currentNode:
                        self.taliNode.right = None
                    else:
                        self.taliNode.left = None
                    searched = True
                elif self.currentNode.right != None and self.currentNode.left != None:
                    if value < self.taliNode.value:
                        self.changeNode = self.currentNode.right
                        self.changeNodeParent = self.currentNode.right

                        while self.changeNode.left:
                            self.changeNodeParent = self.changeNode
                            self.changeNode = self.changeNode.left
                        if self.changeNode.right:
                            self.changeNodeParent.left = self.changeNode.right
                        else:
                            self.changeNodeParent.left = None

                        self.taliNode.left = self.changeNode
                        self.changeNode.left = self.currentNode.left
                        self.changeNode.right = self.currentNode.right
                    else:
                        self.changeNode = self.currentNode.right
                        self.changeNodeParent = self.currentNode.right

                        while self.changeNode.left:
                            self.changeNodeParent = self.changeNode
                            self.changeNode = self.changeNode.left
                        if self.changeNode.right:
                            self.changeNodeParent.left = self.changeNode.right
                        else:
                            self.changeNodeParent.left = None

                        self.taliNode.right = self.changeNode
                        self.changeNode.left = self.currentNode.left
                        self.changeNode.right = self.currentNode.right
                else:
                    if self.taliNode.right == self.currentNode:
                        if self.currentNode.left != None:
                            self.taliNode.right = self.currentNode.left
                        else:
                            self.taliNode.right = self.currentNode.right
                    else:
                        if self.currentNode.left != None:
                            self.taliNode.left = self.currentNode.left
                        else:
                            self.taliNode.left = self.currentNode.right
                    searched = True
                break

        if searched == True:
            del self.currentNode
            return True

        return False


bst_nums = set()
while len(bst_nums) != 100:
    bst_nums.add(random.randint(0, 999))

head = Node(500)
binTree = NodeMgmt(head)

for num in bst_nums:
    binTree.insert(num)

for num in bst_nums:
    if binTree.search(num) == False:
        print("error")
print("success")

delete_nums = set()
bst_nums = list(bst_nums)

while len(delete_nums) != 10:
    delete_nums.add(bst_nums[random.randint(0, 99)])

for del_num in delete_nums:
    if binTree.delete(del_num) == False:
        print("error")
print("success")

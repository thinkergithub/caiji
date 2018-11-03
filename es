节点配置
cluster.name: elasticsearch#必须相同
node.name: node-192-168-8-60#必须不同
path.data: ../data/data/
path.logs: ../data/logs/
bootstrap.memory_lock: false
bootstrap.system_call_filter: false
network.host: 0.0.0.0
http.port: 9200
discovery.zen.ping.unicast.hosts: ["192.168.8.60","192.168.8.19"]
#这个参数决定了要选举一个Master需要多少个节点。默认为1
discovery.zen.minimum_master_nodes: 2
# gateway.recover_after_nodes: 3
node.master: true
node.data: false
node.ingest: false
search.remote.connect: false
相关url
http://localhost:9200/_cat/nodes?v查看节点信息
相关问题解决方法: (目前遇到的两个问题)
1.
sudo vim /etc/sysctl.conf
添加: vm.max_map_count=655360
sysctl -p

2.
vim /etc/security/limits.conf,新加两行：
es soft nofile 65536
es hard nofile 65536
es soft nproc 4096
es hard nproc 4096

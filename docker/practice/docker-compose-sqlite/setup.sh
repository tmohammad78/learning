# ! /bin/bash
echo "Creating directory"
SQLITEDIR=/tmp/sqlitedbs
rm -rf $SQLITEDIR
if [ -a $SQLITEDIR ]
then
  echo "Failed to remove $SQLITEDIR"
  exit 1
fi
mkdir -p $SQLITEDIR
cd $SQLITEDIR
echo "Crearting DB"
echo 'create table t1(c1 text);' | sqlite3 test
echo 'create table t1(c1 text);' | sqlite3 live
echo "Inserting data"
echo 'insert into t1 values ("test");' | sqlite3 test
echo 'insert into t1 values ("live");' | sqlite3 live 
# cd - > /dev/null 2>&1 # Returns to the previous directory
echo "All done OK"
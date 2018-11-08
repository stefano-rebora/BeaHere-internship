
<!-- Modal for Error Message -->
<div class="modal fade" id="ErrorModal" tabindex="-1" role="dialog" aria-labelledby="ErrorModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <div class="modal-body">
                <div class="alert alert-danger" id="errorModalAlert" role="alert">
                    <?php  echo $_SESSION["message"]?>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
            </div>
        </div>
    </div>
</div>

<?php
if (isset($_SESSION["message"]) && !empty($_SESSION["message"])) {
?>

    <script>
        $('#ErrorModal').modal('show');
    </script>

<?php
    $_SESSION["message"] = "";
    }
?>

<!-- Modal for Successful Message -->
<div class="modal fade" id="MessageModal" tabindex="-1" role="dialog" aria-labelledby="MessageModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <div class="modal-body">
                <div class="alert alert-success" id="succesModalAlert" role="alert">
                    <?php  echo $_SESSION["success"]?>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
            </div>
        </div>
    </div>
</div>

<?php
      if (isset($_SESSION["success"]) && !empty($_SESSION["success"])) { 
?>
    <script>
        $('#MessageModal').modal('show');
    </script>
<?php
    $_SESSION["success"] = "";
    }
?>
